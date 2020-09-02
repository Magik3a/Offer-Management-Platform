
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

    [ColumnsScript("Offers.Offers")]
    [BasedOnRow(typeof(Entities.OffersRow), CheckNames = true)]
    public class OffersColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Discount { get; set; }
        public Int32 MinimumDaysDevelopmentTime { get; set; }
        public Int32 MaximumDaysDevelopmentTime { get; set; }
        public DateTime StartDate { get; set; }
        public String AdditionalInfo { get; set; }
        public String CompanyName { get; set; }
        public String OfferStatusName { get; set; }
    }
}