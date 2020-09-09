
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

    [ColumnsScript("Offers.OfferStatuses")]
    [BasedOnRow(typeof(Entities.OfferStatusesRow), CheckNames = true)]
    public class OfferStatusesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferStatusId { get; set; }
        [EditLink]
        [Width(300)]
        public String Name { get; set; }
        [Width(100)]
        [EditLink]
        public String BackgroundColor { get; set; }
        [Width(100)]
        [EditLink]
        public String BorderColor { get; set; }
    }
}