
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CompanyWebSitesRow))]
    public class CompanyWebSitesController : Controller
    {
        [Route("Offers/CompanyWebSites")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.CompanyWebSites.CompanyWebSitesIndex);
        }
    }
}