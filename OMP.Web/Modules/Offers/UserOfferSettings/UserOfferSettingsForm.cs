
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.UserOfferSettings")]
    [BasedOnRow(typeof(Entities.UserOfferSettingsRow), CheckNames = true)]
    public class UserOfferSettingsForm
    {
        public String OfferInvoiceAdditionalInfoFormatter { get; set; }
        public String OfferInvoiceFooterText { get; set; }
        public String OfferInvoiceFooterImage { get; set; }
        public Int32 UserId { get; set; }
    }
}