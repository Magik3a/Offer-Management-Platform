
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Countries")]
    [BasedOnRow(typeof(Entities.CountriesRow), CheckNames = true)]
    public class CountriesForm
    {
        public String Name { get; set; }
    }
}