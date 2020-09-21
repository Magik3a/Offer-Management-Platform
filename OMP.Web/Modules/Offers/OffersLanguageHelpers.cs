using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using OMP.Administration.Entities;
using Serenity.Data;

namespace OMP.Offers
{
    public static class OffersLanguageHelpers
    {
        public static int? getCurrentUIlanguageID()
        {
            //var UI_languageShortName = CultureInfo.CurrentUICulture.Name;
            var UI_languageShortName = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;
            var language = getLanguage(UI_languageShortName);
            return language;
        }

        private static int? getLanguage(string uiCulture)
        {
            using (var connection = SqlConnections.NewFor<LanguageRow>())
            {
                var language =
                    connection.TryFirst<LanguageRow>(new Criteria(LanguageRow.Fields.LanguageId).Like($"%{uiCulture}%"));

                return language?.Id;
            }
        }
        public static int? getCurrentUIlanguageID(string uiCulture)
        {
            var language = getLanguage(uiCulture);
            return language;
        }
    }
}
