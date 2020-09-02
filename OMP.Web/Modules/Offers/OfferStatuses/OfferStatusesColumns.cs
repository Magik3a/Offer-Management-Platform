
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
        public String Name { get; set; }
        public String BorderColor { get; set; }
        public String BackgroundColor { get; set; }
    }
}