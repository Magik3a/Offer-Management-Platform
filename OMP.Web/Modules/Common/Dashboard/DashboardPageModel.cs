
using OMP.Offers.Entities;
using System.Collections.Generic;

namespace OMP.Common
{
    public class DashboardPageModel
    {
        public List<OfferStatusesRow> OfferStatuses { get; set; }
        public List<SoftwareFrameworksRow> SoftwareFrameworks { get; set; }
        public List<OffersRow> Offers { get; set; }
        public List<TaskStatusesRow> TaskStatuses { get; set; }
        public List<OfferCategoryTasksRow> OfferCategoryTasks { get; set; }

        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
    }
}