
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CitiesRow))]
    public class CitiesController : Controller
    {
        [Route("Offers/Cities")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Cities.CitiesIndex);
        }
    }
}