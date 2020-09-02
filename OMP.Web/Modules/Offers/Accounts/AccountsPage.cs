
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountsRow))]
    public class AccountsController : Controller
    {
        [Route("Offers/Accounts")]
        public ActionResult Index()
        {
            return View(MVC.Views.Offers.Accounts.AccountsIndex);
        }
    }
}