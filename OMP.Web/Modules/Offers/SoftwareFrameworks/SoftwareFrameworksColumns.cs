
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

    [ColumnsScript("Offers.SoftwareFrameworks")]
    [BasedOnRow(typeof(Entities.SoftwareFrameworksRow), CheckNames = true)]
    public class SoftwareFrameworksColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 SoftwareFrameworkId { get; set; }
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String Description { get; set; }
        [Width(100)]
        public String SpecificVersion { get; set; }
        [Width(100)]
        [EditLink]
        public String BorderColor { get; set; }
        [Width(100)]
        [EditLink]
        public String BackgroundColor { get; set; }
    }
}