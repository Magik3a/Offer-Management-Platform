
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.OfferAttachments")]
    [BasedOnRow(typeof(Entities.OfferAttachmentsRow), CheckNames = true)]
    public class OfferAttachmentsForm
    {
        [Category("Required")]
        public Int32 OfferId { get; set; }
        public String Name { get; set; }
        public String FilePath { get; set; }
        [Category("Extra info")]
        public String Description { get; set; }
    }
}