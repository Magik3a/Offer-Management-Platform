
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OfferCategoryTasksRow))]
    public class OfferCategoryTasksController : Controller
    {
        [Route("Offers/OfferCategoryTasks")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.OfferCategoryTasks.OfferCategoryTasksIndex);
        }
    }
}