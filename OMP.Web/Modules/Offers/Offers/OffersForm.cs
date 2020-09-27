
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
        [Category("Required")]
        [DefaultValue("Offer for updating system")]
        public String Name { get; set; }
        [QuarterWidth]
        public DateTime StartDate { get; set; }
        [QuarterWidth]
        public Decimal Discount { get; set; }

        [QuarterWidth]
        public Int32 MinimumDaysDevelopmentTime { get; set; }
        [QuarterWidth]

        public Int32 MaximumDaysDevelopmentTime { get; set; }

        [HalfWidth]
        public Int32 CompanyId { get; set; }
        [HalfWidth]
        public Int32 OfferStatusId { get; set; }
        [HalfWidth]
        public Int32 SoftwareFrameworkId { get; set; }
        [Category("Extra info")]
        public String AdditionalInfo { get; set; }
        public List<object> NoteList { get; set; }

    }
}