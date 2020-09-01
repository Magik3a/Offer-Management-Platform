
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CountriesRow))]
    public class CountriesController : Controller
    {
        [Route("Offers/Countries")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Countries.CountriesIndex);
        }
    }
}