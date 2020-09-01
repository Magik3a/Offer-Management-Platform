using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using OMP.Administration.Entities;
using OMP.AppServices;
using OMP.Localization;
using Serenity.Data;
using Serenity.Reflection;
using Serenity.Services;

namespace OMP.Administration
{
    public class OMPLocalizationBehavior : IImplicitBehavior, IListBehavior
    {
        private Type localRowType;
        private LocalizationRowAttribute attr;
        private Field foreignKeyField;
        private Field languageIdField;
        private BaseCriteria foreignKeyCriteria;
        private BaseCriteria languageIdCriteria;
        private Func<Row> localRowFactory;

        public bool ActivateFor(Row row)
        {
            var loc = row as IOMPLocalizationRow;
            if (loc == null)
                return false;
            
            attr = row.GetType().GetCustomAttribute<LocalizationRowAttribute>();
            localRowType = attr.LocalizationRow;

            localRowFactory = FastReflection.DelegateForConstructor<Row>(localRowType);
            var localRow = localRowFactory();

            var foreignKeyFieldName = attr.MappedIdField ?? ((Field)((IIdRow)row).IdField).PropertyName;

            foreignKeyField = localRow.FindFieldByPropertyName(foreignKeyFieldName) ??
                localRow.FindField(foreignKeyFieldName);

            this.foreignKeyCriteria = new Criteria(foreignKeyField.PropertyName ?? foreignKeyField.Name);


            var languageIdKeyField = ((Field)((ILocalizationRow)localRow).CultureIdField).PropertyName;

            languageIdField = localRow.FindFieldByPropertyName(languageIdKeyField) ??
                              localRow.FindField(languageIdKeyField);

            this.languageIdCriteria = new Criteria(languageIdField.PropertyName ?? languageIdField.Name);

            return true;
        }

        public void OnValidateRequest(IListRequestHandler handler)
        {
        }

        public void OnPrepareQuery(IListRequestHandler handler, SqlQuery query)
        {
        }

        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query)
        {
        }

        public void OnBeforeExecuteQuery(IListRequestHandler handler)
        {
        }

        public void OnAfterExecuteQuery(IListRequestHandler handler)
        {
        }

        public void OnReturn(IListRequestHandler handler)
        {
            if (handler.Response.Entities.Count == 0)
                return;

            var culture = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;
            var userLanguage = new LanguageRow();

            using (var connectionLanguage = SqlConnections.NewFor<LanguageRow>())
            {
                userLanguage = connectionLanguage.TryFirst<LanguageRow>(new Criteria(LanguageRow.Fields.LanguageId).Like($"%{culture}%"));
                if (userLanguage == null)
                    return;
            }
            
            var listHandler = DefaultHandlerFactory.ListHandlerFor(localRowType);
            var listRequest = DefaultHandlerFactory.ListRequestFor(localRowType);
            listRequest.ColumnSelection = ColumnSelection.List;

            List<IOMPLocalizationRow> localList = handler.Response.Entities.Cast<IOMPLocalizationRow>().ToList();
            listRequest.Criteria = (foreignKeyCriteria.In(localList.Select(s => s.IdField[s as Row])) && languageIdCriteria == userLanguage.Id.Value);

            var translationsResponse = listHandler.Process(handler.Connection, listRequest);
            if (translationsResponse.Entities.Count == 0)
                return;

            var responseLang = translationsResponse.Entities.Cast<IOMPLocalizationLangRow>();
            foreach (IOMPLocalizationRow responseEntity in handler.Response.Entities)
            {
                var entityLang = responseLang
                    .FirstOrDefault(s => (Int32)foreignKeyField.AsObject(s as Row) == responseEntity.IdField[responseEntity as Row]);

                if(entityLang != null)
                    responseEntity.NameField[responseEntity as Row] = entityLang?.NameField[entityLang as Row];
            }
        }

    }
}
