
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.OfferStatuses")]
    [BasedOnRow(typeof(Entities.OfferStatusesRow), CheckNames = true)]
    public class OfferStatusesForm
    {
        public String Name { get; set; }
        [HalfWidth]
        public String BackgroundColor { get; set; }
        [HalfWidth]
        public String BorderColor { get; set; }

        public bool CountForCompleted { get; set; }
    }
}