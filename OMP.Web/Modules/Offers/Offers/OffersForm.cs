
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Offers")]
    [BasedOnRow(typeof(Entities.OffersRow), CheckNames = true)]
    public class OffersForm
    {
        public String Name { get; set; }
        public Decimal Discount { get; set; }
        public Int32 MinimumDaysDevelopmentTime { get; set; }
        public Int32 MaximumDaysDevelopmentTime { get; set; }
        public DateTime StartDate { get; set; }
        public String AdditionalInfo { get; set; }
        public Int32 CompanyId { get; set; }
        public Int32 OfferStatusId { get; set; }
        public List<object> NoteList { get; set; }

    }
}