using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OMP.Web.Modules.Offers;

namespace OMP.Offers.Offers
{
    using Entities;
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

        public object GetData()
        {
            var data = new OfferReportData();

            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var o = OffersRow.Fields;
                data.Offer = connection.TryById<OffersRow>(this.OfferId, q => q
                                 .SelectTableFields()
                                 .Where(o.IsActive == 1)
                             ) ?? new OffersRow();

                var oc = OfferCategoriesRow.Fields;
                data.OfferCategories = connection.List<OfferCategoriesRow>(q => q
                    .SelectTableFields()
                    .Where(oc.OfferId == this.OfferId && oc.IsActive == 1));

                var oct = OfferCategoryTasksRow.Fields;
                data.OfferCategoryTasks = connection.List<OfferCategoryTasksRow>(q => q
                    .SelectTableFields()
                    .Select(oct.OfferCategoryOfferId)
                    .Where(oct.OfferCategoryOfferId == this.OfferId && oct.IsActive == 1));


            }

            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {

             options.FooterHeaderReplace.Add("languageId", LanguageId);

            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            //options.MarginLeft = "2cm";
            //options.MarginRight = "1cm";
            //options.MarginTop = "1cm";
            //options.MarginBottom = "1cm";
            var uriForProtocol = new Uri(options.Url.ToString()).GetLeftPart(UriPartial.Authority);

            options.CustomArgs.Add("--header-html");
            options.CustomArgs.Add(uriForProtocol + "/Offers/Offers/Header?offerId="+ this.OfferId);
            options.CustomArgs.Add("--footer-html");
            options.CustomArgs.Add(uriForProtocol + "/Offers/Offers/Footer");

            // options.CustomArgs.Add("--disable-smart-shrinking");
        }

        public IDictionary<string, object> GetAdditionalData()
        {
            var returnDic = new Dictionary<string, object>();
            returnDic.Add("LanguageId", LanguageId);

            return returnDic;
        }
    }


    public class OfferReportData
    {
        public OffersRow Offer { get; set; }
        public List<OfferCategoriesRow> OfferCategories { get; set; }
        public List<OfferCategoryTasksRow> OfferCategoryTasks { get; set; }
    }
}
