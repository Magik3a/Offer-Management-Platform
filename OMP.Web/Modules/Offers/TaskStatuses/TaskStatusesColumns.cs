
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
        [EditLink]
        public String Name { get; set; }
        public String BorderColor { get; set; }
        public String BackgroundColor { get; set; }
    }
}