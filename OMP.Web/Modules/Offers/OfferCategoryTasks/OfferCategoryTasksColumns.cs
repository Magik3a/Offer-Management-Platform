
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferCategoryTaskId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal DevelopmentTimeHours { get; set; }
        public String Description { get; set; }
        public String ParentOfferCategoryTaskName { get; set; }
        public String OfferCategoryCategoryNameReport { get; set; }
        public String TaskStatusName { get; set; }
    }
}