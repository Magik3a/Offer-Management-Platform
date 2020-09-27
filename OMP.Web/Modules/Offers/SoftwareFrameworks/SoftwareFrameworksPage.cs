
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SoftwareFrameworksRow))]
    public class SoftwareFrameworksController : Controller
    {
        [Route("Offers/SoftwareFrameworks")]
        public ActionResult Index()
        {
            return View("~/Modules/Offers/SoftwareFrameworks/SoftwareFrameworksIndex.cshtml");
        }
    }
}