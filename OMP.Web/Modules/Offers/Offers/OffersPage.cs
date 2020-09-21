
using System;
using System.Collections.Generic;
using OMP.Administration.Entities;
using OMP.Offers.Entities;
using Serenity.Abstractions;
using Serenity.Data;

namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using OMP.Offers.Repositories;
    using System.Linq;

    [PageAuthorize(typeof(Entities.OffersRow))]
    public class OffersController : Controller
    {
        [Route("Offers/Offers")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Offers_.OffersIndex);
        }


        [HttpGet]
        [Route("Offers/Offers/[Action]")]
        public ActionResult Header()
        {
            var model = new OfferReportHeaderModel();
            if(string.IsNullOrEmpty(HttpContext.Request.Query["offerId"]))
                return PartialView(MVC.Views.Offers.Offers_.OfferReportHeader, model);
            
            var offerId = Int32.Parse(HttpContext.Request.Query["offerId"]);
            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var offer = new OffersRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest
                {
                    EntityId = offerId,
                    IncludeColumns = new HashSet<string> { "Name", "Localizations" }
                });

                model.OfferTitle = offer.Entity.Name;

                var languageId = 0;
                if (!HttpContext.Request.Query["languageId"].Any())
                    return PartialView(MVC.Views.Offers.Offers_.OfferReportHeader, model);

                languageId = Int32.Parse(HttpContext.Request.Query["languageId"]);
                foreach (var offerLocalization in offer.Localizations)
                {
                    if (offerLocalization.Key == languageId.ToString() && !string.IsNullOrEmpty(((OffersRow)offerLocalization.Value).Name))
                    {
                        model.OfferTitle = ((OffersRow) offerLocalization.Value).Name;
                    }

                }
            }
            if (HttpContext.Request.Query["languageCode"].Any())
                model.PageStringLocalized = Dependency.TryResolve<ILocalTextRegistry>()?.TryGet(HttpContext.Request.Query["languageCode"], "Site.Offers.OfferReportPage");

            return PartialView(MVC.Views.Offers.Offers_.OfferReportHeader, model);

        }
        
        [HttpGet]
        [Route("Offers/Offers/[Action]")]
        public ActionResult Footer()
        {
            var model = new OfferReportFooterModel();

            using (var connection = SqlConnections.NewFor<UserOfferSettingsRow>())
            {

                var userOfferSettings  = new UserOfferSettingsRepository().List(connection, new Serenity.Services.ListRequest
                {
                    IncludeColumns = new HashSet<string> { "OfferInvoiceFooterText", "OfferInvoiceFooterImage", "Localizations" },
                    Criteria = (new Criteria(UserOfferSettingsRow.Fields.UserId.Name) ==  Authorization.UserId), Sort= new []{ new Serenity.Services.SortBy("InsertDate", true) }
                });

                if (userOfferSettings.Entities.Any())
                {
                    var first = userOfferSettings.Entities.FirstOrDefault();

                    model.FooterText = first?.OfferInvoiceFooterText;
                    model.FooterImagePath = first?.OfferInvoiceFooterImage;

                    var languageId = 0;
                    if (!HttpContext.Request.Query["languageId"].Any())
                        return PartialView(MVC.Views.Offers.Offers_.OfferReportFooter, model);

                    languageId = Int32.Parse(HttpContext.Request.Query["languageId"]);

                    var userSettingsLocalization = new UserOfferSettingsRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest
                    {
                        EntityId = Authorization.UserId,
                        IncludeColumns = new HashSet<string> { "OfferInvoiceFooterText", "Localizations" }
                    });

                    foreach (var offerLocalization in userSettingsLocalization.Localizations)
                    {
                        var parsed = (UserOfferSettingsRow) offerLocalization.Value;
                        if (offerLocalization.Key == languageId.ToString() && !string.IsNullOrEmpty(parsed.OfferInvoiceFooterText))
                        {
                            model.FooterText = parsed.OfferInvoiceFooterText;
                        }
                        if (offerLocalization.Key == languageId.ToString() && !string.IsNullOrEmpty(parsed.OfferInvoiceFooterImage))
                        {
                            model.FooterImagePath = parsed.OfferInvoiceFooterImage;
                        }
                    }
                }
            }

            return PartialView(MVC.Views.Offers.Offers_.OfferReportFooter, model);

        }

    }
    public class OfferReportHeaderModel
    {
        public string OfferTitle { get; set; }
        public string PageStringLocalized { get; set; }
    }

    public class OfferReportFooterModel
    {
        public string FooterText { get; set; }
        public string FooterImagePath { get; set; }
    }
}