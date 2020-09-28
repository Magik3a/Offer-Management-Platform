
using OMP.Administration.Logging;

namespace OMP.Offers.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Offers.OfferCategoryTasks")]
    [BasedOnRow(typeof(Entities.OfferCategoryTasksRow), CheckNames = true)]
    public class OfferCategoryTasksColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 OfferCategoryTaskId { get; set; }
        [FilterOnly]
        public Int32 TaskStatusId { get; set; }

        [EditLink]
        [Width(400)]
        public String Name { get; set; }
        [EditLink]
        public Decimal DevelopmentTimeHours { get; set; }
        [EditLink]
        [Width(300)]
        public String Description { get; set; }

        public String OfferName { get; set; }
        //public String ParentOfferCategoryTaskName { get; set; }
        public String OfferCategoryCategoryNameReport { get; set; }
        public String TaskStatusName { get; set; }

        [EditLink]
        public Int32 Order { get; set; }
        public Int32 OfferCategoryOrder { get; set; }
    }
}