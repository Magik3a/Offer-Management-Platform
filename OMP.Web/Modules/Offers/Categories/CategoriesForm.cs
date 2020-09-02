
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
        public String Name { get; set; }
        public String FontColor { get; set; }
    }
}