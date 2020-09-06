
using System;
using OMP.Offers.Entities;
using Serenity.Data;

namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

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
            var offerId = Int32.Parse(HttpContext.Request.Query["offerId"]);

            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var row = connection.First<OffersRow>(r => r.SelectTableFields()
                    .Where(new Criteria(OffersRow.Fields.OfferId) == offerId && new Criteria(OffersRow.Fields.IsActive) == 1)
                    .OrderBy(OffersRow.Fields.InsertDate, true));
                model.OfferTitle = row.Name;
            }

            return PartialView(MVC.Views.Offers.Offers_.OfferReportHeader, model);

        }

        
    }
    public class OfferReportHeaderModel
    {
        public string OfferTitle { get; set; }
    }
}