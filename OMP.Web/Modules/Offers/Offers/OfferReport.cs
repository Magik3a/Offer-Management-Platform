using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using OMP.Administration.Entities;
using OMP.Web.Modules.Offers;
using Serenity;
using Serenity.Abstractions;

namespace OMP.Offers.Offers
{
    using Entities;
    using OMP.Offers.Repositories;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Globalization;

    [Report("Offers.Offer")]
    [ReportDesign(MVC.Views.Offers.Offers_.OfferReport)]
    [RequiredPermission(OffersPermissionKeys.Auditing)]
    public class OfferReport : IReport, IReportWithAdditionalData, ICustomizeHtmlToPdf
    {
        
        public Int32 OfferId { get; set; }

        public string LanguageId { get; set; }

        private Int32 LanguageDbId { get; set; }
        public object GetData()
        {
            var data = new OfferReportData();
            var language = OffersLanguageHelpers.getCurrentUIlanguageID(LanguageId).ToString();
            data.OfferReportTotalPriceString = Dependency.TryResolve<ILocalTextRegistry>()?.TryGet(LanguageId, "Site.Offers.OfferReportTotalPrice");

            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var offer = new OffersRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest
                {
                    EntityId = OfferId,
                    IncludeColumns = new HashSet<string> {  "Localizations" }
                });
                data.Offer = offer.Entity;

                if (offer.Localizations.Any())
                {
                    var localOffer = offer.Localizations.FirstOrDefault(s => s.Key == language);

                    if (localOffer.Value != null)
                    {
                        if(!string.IsNullOrEmpty(localOffer.Value.Name))
                            data.Offer.Name = localOffer.Value.Name;

                        if(!string.IsNullOrEmpty(localOffer.Value.AdditionalInfo))
                            data.Offer.AdditionalInfo = localOffer.Value.AdditionalInfo;
                    }
                }

                var offerCategories = new OfferCategoriesRepository().List(connection, new Serenity.Services.ListRequest
                {
                    IncludeColumns = new HashSet<string> { "Localizations" },
                    Criteria = (new Criteria(OfferCategoriesRow.Fields.OfferId.Name) == OfferId),
                    ColumnSelection = Serenity.Services.ColumnSelection.Details
                });
                data.OfferCategories = offerCategories.Entities;
                if (offerCategories.Entities.Any())
                {
                    var offerCategoryIds = offerCategories.Entities.Select(oc => oc.OfferCategoryId);
                    var listOfferCategoryLocals =
                        connection.List<OfferCategoriesLangRow>(
                            new Criteria(OfferCategoriesLangRow.Fields.OfferCategoryId).In(offerCategoryIds) 
                            && new Criteria(OfferCategoriesLangRow.Fields.LanguageId) == language);
                    foreach (var listOfferCategoryLocal in listOfferCategoryLocals)
                    {
                        var category = data.OfferCategories
                            .FirstOrDefault(oc => oc.OfferCategoryId == listOfferCategoryLocal.OfferCategoryId);
                        category.CategoryNameReport = listOfferCategoryLocal.CategoryNameReport;
                    }

                }

                var offerCategoryTasks = new OfferCategoryTasksRepository().List(connection, new Serenity.Services.ListRequest
                {
                    IncludeColumns = new HashSet<string> { "Localizations" },
                    Criteria = (new Criteria(OfferCategoryTasksRow.Fields.OfferCategoryOfferId.Name) == OfferId),
                    ColumnSelection = Serenity.Services.ColumnSelection.Details
                });
                data.OfferCategoryTasks = offerCategoryTasks.Entities;

                if (offerCategoryTasks.Entities.Any())
                {
                    var offerCategoryTaskIds = offerCategoryTasks.Entities.Select(oc => oc.OfferCategoryTaskId);
                    var listOfferCategoryTaskLocals =
                        connection.List<OfferCategoryTasksLangRow>(
                            new Criteria(OfferCategoryTasksLangRow.Fields.OfferCategoryTaskId).In(offerCategoryTaskIds)
                            && new Criteria(OfferCategoryTasksLangRow.Fields.LanguageId) == language);
                    foreach (var listOfferCategoryLocal in listOfferCategoryTaskLocals)
                    {
                        var categoryTask = data.OfferCategoryTasks
                            .FirstOrDefault(oc => oc.OfferCategoryTaskId == listOfferCategoryLocal.OfferCategoryTaskId);
                        categoryTask.Name = listOfferCategoryLocal.Name;
                    }

                }

            }

            return data;
        }
        

        public void Customize(IHtmlToPdfOptions options)
        {

             options.FooterHeaderReplace.Add("languageId", OffersLanguageHelpers.getCurrentUIlanguageID().ToString());
             options.FooterHeaderReplace.Add("languageCode", LanguageId);
             options.FooterHeaderReplace.Add("offerId", OfferId.ToString());

            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            //options.MarginLeft = "2cm";
            //options.MarginRight = "1cm";
            //options.MarginTop = "1cm";
            //options.MarginBottom = "1cm";
            var uriForProtocol = new Uri(options.Url.ToString()).GetLeftPart(UriPartial.Authority);

            options.CustomArgs.Add("--header-html");
            options.CustomArgs.Add(uriForProtocol + "/Offers/Offers/Header");
            options.CustomArgs.Add("--footer-html");
            options.CustomArgs.Add(uriForProtocol + "/Offers/Offers/Footer");

            // options.CustomArgs.Add("--disable-smart-shrinking");
        }

        public IDictionary<string, object> GetAdditionalData()
        {
            var returnDic = new Dictionary<string, object>();
            if (string.IsNullOrEmpty(LanguageId))
                LanguageId = CultureInfo.CurrentCulture.Name;

            returnDic.Add("LanguageId", LanguageId);

            return returnDic;
        }

    }


    public class OfferReportData
    {
        public string OfferReportTotalPriceString { get; set; }
        public OffersRow Offer { get; set; }
        public List<OfferCategoriesRow> OfferCategories { get; set; }
        public List<OfferCategoryTasksRow> OfferCategoryTasks { get; set; }
    }
}
