
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

    [ColumnsScript("Offers.TaskStatuses")]
    [BasedOnRow(typeof(Entities.TaskStatusesRow), CheckNames = true)]
    public class TaskStatusesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TaskStatusId { get; set; }
        [Width(300)]
        [EditLink]
        public String Name { get; set; }
        [EditLink]
        [Width(100)]
        public String BackgroundColor { get; set; }
        [EditLink]
        [Width(100)]
        public String BorderColor { get; set; }
    }
}