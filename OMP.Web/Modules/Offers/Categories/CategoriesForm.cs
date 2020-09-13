
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        [Category("Required")]
        public String Name { get; set; }
        [HalfWidth]
        public String FontColor { get; set; }
        [HalfWidth]
        public Int32 DefaultOrder { get; set; }

    }
}