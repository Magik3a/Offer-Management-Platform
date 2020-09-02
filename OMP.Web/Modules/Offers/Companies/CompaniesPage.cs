
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CompaniesRow))]
    public class CompaniesController : Controller
    {
        [Route("Offers/Companies")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Companies.CompaniesIndex);
        }
    }
}