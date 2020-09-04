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
using Serenity.Data.Mapping;
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
            if (attr == null)
                return false;

            localRowType = attr.LocalizationRow;
            if (!typeof(ILocalizationRow).IsAssignableFrom(localRowType))
            {
                throw new ArgumentException(String.Format(
                    "Row type '{0}' has a LocalizationRowAttribute, " +
                    "but its localization row type ('{1}') doesn't implement ILocalizationRow interface!",
                    row.GetType().FullName, localRowType.FullName));
            }

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

            // Lets Get the main row and translate it
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
            if (translationsResponse.Entities.Count > 0)
            {
                var responseLang = translationsResponse.Entities.Cast<IOMPLocalizationLangRow>();
                // Validate They have IName row
                foreach (IOMPLocalizationRow responseEntity in handler.Response.Entities)
                {
                    var entityLang = responseLang
                        .FirstOrDefault(s =>
                            (Int32) foreignKeyField.AsObject(s as Row) ==
                            responseEntity.IdField[responseEntity as Row]);

                    if (entityLang != null)
                        responseEntity.NameField[responseEntity as Row] = entityLang?.NameField[entityLang as Row];


                }
            }

            // How about the joined tables, lets translate them too
            var localizationRowFields = handler.Row.GetFields();
            foreach (var localizationRowField in localizationRowFields.Where(f =>
                !String.IsNullOrEmpty(f.ForeignTable)))
            {

                var foreignKeyAttr = localizationRowField.GetAttribute<ForeignKeyAttribute>();
                var textualFieldAttr = localizationRowField.GetAttribute<TextualFieldAttribute>();
                if (foreignKeyAttr.RowType == null || textualFieldAttr == null || string.IsNullOrEmpty(textualFieldAttr.Value))
                    return;

                var foreignRowFactory = FastReflection.DelegateForConstructor<Row>(foreignKeyAttr.RowType);
                var foreignRow = foreignRowFactory();
                var foreignAttr = foreignRow.GetType().GetCustomAttribute<LocalizationRowAttribute>();

                if (foreignAttr == null)
                    return;

                var foreignLangType = foreignAttr.LocalizationRow;

                var foreignLangRowFactory = FastReflection.DelegateForConstructor<Row>(foreignLangType);
                var foreignLangRow = foreignLangRowFactory();

                var externalForeignKeyFieldName =
                    foreignAttr.MappedIdField ?? ((Field)((IIdRow)foreignRow).IdField).PropertyName;
                var externalForeignKeyField = foreignLangRow.FindFieldByPropertyName(externalForeignKeyFieldName) ??
                                              foreignLangRow.FindField(externalForeignKeyFieldName);

                var listForeignHandler = DefaultHandlerFactory.ListHandlerFor(foreignLangType);
                var listForeignRequest = DefaultHandlerFactory.ListRequestFor(foreignLangType);
                listRequest.ColumnSelection = ColumnSelection.List;

                var externalForeignCriteria =
                    new Criteria(externalForeignKeyField.PropertyName ?? externalForeignKeyField.Name);

                var idList = new List<Int32>();
                foreach (IOMPLocalizationRow responseEntity in handler.Response.Entities)
                {
                    var idToAdd = (Int32?)localizationRowField.AsObject(responseEntity as Row);
                    if(idToAdd.HasValue)
                        idList.Add(idToAdd.Value);
                }
                if (!idList.Any())
                    return;
                listForeignRequest.Criteria =
                    externalForeignCriteria.In(idList.Distinct()) &&
                    languageIdCriteria == userLanguage.Id.Value;

                var translationsForeignResponse =
                    listForeignHandler.Process(handler.Connection, listForeignRequest);

                if (translationsForeignResponse.TotalCount > 0)
                {
                    foreach (IOMPLocalizationRow responseEntity in handler.Response.Entities)
                    {
                        var localId = (Int32?)localizationRowField.AsObject(responseEntity as Row);

                        var entityLang = translationsForeignResponse.Entities.Cast<IOMPLocalizationLangRow>()
                            .FirstOrDefault(s =>
                                (Int32?)externalForeignKeyField.AsObject(s as Row) == localId);

                        if (entityLang != null)
                        {
                            var foreignEntityName = entityLang?.NameField[entityLang as Row];

                            var textualFieldExternal = (responseEntity as Row).FindField(textualFieldAttr.Value);
                            if (!string.IsNullOrEmpty(foreignEntityName))
                                textualFieldExternal.AsObject(responseEntity as Row, foreignEntityName);
                        }
                    }

                }
            }
        }

    }
}
