
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

    [ColumnsScript("Offers.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String FontColor { get; set; }
    }
}