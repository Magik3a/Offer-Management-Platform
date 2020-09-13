
namespace OMP.Offers.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OfferAttachmentsRow))]
    public class OfferAttachmentsController : Controller
    {
        [Route("Offers/OfferAttachments")]
        public ActionResult Index()
        {
            return View("~/Modules/Offers/OfferAttachments/OfferAttachmentsIndex.cshtml");
        }
    }
}