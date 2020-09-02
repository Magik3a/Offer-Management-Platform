
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OfferCategoriesRow))]
    public class OfferCategoriesController : Controller
    {
        [Route("Offers/OfferCategories")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.OfferCategories.OfferCategoriesIndex);
        }
    }
}