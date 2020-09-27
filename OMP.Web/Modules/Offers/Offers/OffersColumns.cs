
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

        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 OfferId { get; set; }
        [EditLink]
        [Width(400)]
        public String Name { get; set; }

        public String CompanyName { get; set; }
        [Width(150)]
        public String OfferStatusName { get; set; }
        public Decimal Price { get; set; }

        public Decimal Discount { get; set; }
        public Decimal TotalPrice { get; set; }
        public Int32 NotCompletedTasks { get; set; }
        public Int32 MinimumDaysDevelopmentTime { get; set; }
        public Int32 MaximumDaysDevelopmentTime { get; set; }
        public DateTime StartDate { get; set; }
        [Width(150)]
        public String SoftwareFrameworkName { get; set; }

        [Width(300)]
        public String AdditionalInfo { get; set; }


        [FilterOnly]
        public Int32 CompanyId { get; set; }

        [FilterOnly]
        public Int32 OfferStatusId { get; set; }

        [FilterOnly]
        public Int32 CompanyCityId { get; set; }
    }
}