
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.OfferCategories")]
    [BasedOnRow(typeof(Entities.OfferCategoriesRow), CheckNames = true)]
    public class OfferCategoriesForm
    {
        [Category("Required")]
        public Int32 OfferId { get; set; }
        public Int32 CategoryId { get; set; }
        public String CategoryNameReport { get; set; }
        [HalfWidth]
        public Decimal Price { get; set; }
        [HalfWidth]
        public Int32 Order { get; set; }

        public String CategoryFontColorReport { get; set; }
    }
}