
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Offers/Categories")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Categories.CategoriesIndex);
        }
    }
}