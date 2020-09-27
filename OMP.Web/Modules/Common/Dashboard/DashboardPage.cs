
namespace OMP.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using OMP.Offers.Entities;
    using OMP.Offers.Repositories;
    using Serenity.Services;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var model = new DashboardPageModel();
            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var offerStatuses = new OfferStatusesRepository().List(connection, new ListRequest
                {
                    ColumnSelection = ColumnSelection.Details
                });
                model.OfferStatuses = offerStatuses.Entities;

                var softwareFrameworks = new SoftwareFrameworksRepository().List(connection, new ListRequest
                {
                    ColumnSelection = ColumnSelection.Details
                });
                model.SoftwareFrameworks = softwareFrameworks.Entities;

                var offers = new OffersRepository().List(connection, new ListRequest
                {
                    ColumnSelection= ColumnSelection.Details
                });
                model.Offers = offers.Entities;

                var taskStatuses = new TaskStatusesRepository().List(connection, new ListRequest
                {
                    ColumnSelection = ColumnSelection.Details
                });
                model.TaskStatuses = taskStatuses.Entities;

                var offerCategoryTasks = new OfferCategoryTasksRepository().List(connection, new ListRequest
                {
                    ColumnSelection = ColumnSelection.Details
                });
                model.OfferCategoryTasks = offerCategoryTasks.Entities;
            }
            return View(MVC.Views.Common.Dashboard.DashboardIndex, model );
        }
    }
}
