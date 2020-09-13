
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UserOfferSettingsRow))]
    public class UserOfferSettingsController : Controller
    {
        [Route("Offers/UserOfferSettings")]
        public ActionResult Index()
        {
            return View("~/Modules/Offers/UserOfferSettings/UserOfferSettingsIndex.cshtml");
        }
    }
}