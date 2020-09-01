
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
            return View("~/Modules/Offers/Cities/CitiesIndex.cshtml");
        }
    }
}