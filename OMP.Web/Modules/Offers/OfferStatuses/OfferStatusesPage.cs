
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OfferStatusesRow))]
    public class OfferStatusesController : Controller
    {
        [Route("Offers/OfferStatuses")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.OfferStatuses.OfferStatusesIndex);
        }
    }
}