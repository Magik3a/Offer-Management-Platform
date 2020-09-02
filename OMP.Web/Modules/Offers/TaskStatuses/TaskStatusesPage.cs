
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TaskStatusesRow))]
    public class TaskStatusesController : Controller
    {
        [Route("Offers/TaskStatuses")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.TaskStatuses.TaskStatusesIndex);
        }
    }
}