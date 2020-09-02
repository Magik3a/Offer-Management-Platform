
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
    }
}