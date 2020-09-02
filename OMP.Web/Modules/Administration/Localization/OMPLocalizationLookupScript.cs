using System;
using System.Collections.Generic;
using System.Linq;
using Serenity.Web;
using System.Globalization;
using OMP.Localization;
using Serenity.Data;
using Serenity.Reflection;
using Serenity.Services;

using System.Reflection;
using OMP.Administration.Entities;

namespace OMP.Administration.Services
{
    public class OMPLocalizationLookupScript<TRow> :
        RowLookupScript<TRow>
        where TRow : Row, IOMPLocalizationRow, new()
    {
        protected override List<TRow> GetItems()
        {
            var items = base.GetItems();
            if (items.Any())
            {
                var attr = items.First().GetType().GetCustomAttribute<LocalizationRowAttribute>();
                if (attr == null)
                    return items;

                var localRowType = attr.LocalizationRow;
                var localRowFactory = FastReflection.DelegateForConstructor<Row>(localRowType);
                var localRow = localRowFactory();
                var foreignKeyFieldName = attr.MappedIdField ?? ((Field)((IIdRow)items.First()).IdField).PropertyName;
                var foreignKeyField = localRow.FindFieldByPropertyName(foreignKeyFieldName) ??
                                  localRow.FindField(foreignKeyFieldName);
                var foreignKeyCriteria = new Criteria(foreignKeyField.PropertyName ?? foreignKeyField.Name);

                var languageIdKeyField = ((Field)((ILocalizationRow)localRow).CultureIdField).PropertyName;
                var languageIdField = localRow.FindFieldByPropertyName(languageIdKeyField) ??
                                  localRow.FindField(languageIdKeyField);
                var languageIdCriteria = new Criteria(languageIdField.PropertyName ?? languageIdField.Name);

                var culture = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;

                var userLanguage = new LanguageRow();
                using (var connectionLanguage = SqlConnections.NewFor<LanguageRow>())
                {
                    userLanguage = connectionLanguage.TryFirst<LanguageRow>(new Criteria(LanguageRow.Fields.LanguageId).Like($"%{culture}%"));
                    if (userLanguage == null)
                        return items;
                }

                var listHandler = DefaultHandlerFactory.ListHandlerFor(localRowType);
                var listRequest = DefaultHandlerFactory.ListRequestFor(localRowType);
                listRequest.ColumnSelection = ColumnSelection.List;
                listRequest.Criteria = (foreignKeyCriteria.In(items.Select(i => i.IdField[i])) && languageIdCriteria == userLanguage.Id.Value);
                
                var translationsResponse = listHandler.Process(SqlConnections.NewFor<TRow>(), listRequest);
                if (translationsResponse.Entities.Count == 0)
                    return items;
                foreach (var item in items)
                {
                    var translated = translationsResponse.Entities.Cast<IOMPLocalizationLangRow>().FirstOrDefault(
                    t => (Int32)foreignKeyField.AsObject(t as Row) == item.IdField[item]);
                    if (translated != null)
                        item.NameField[item] = translated.NameField[translated as Row];
                }
            }

            return items;
        }
    }
}
