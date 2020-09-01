
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Cities")]
    [BasedOnRow(typeof(Entities.CitiesRow), CheckNames = true)]
    public class CitiesForm
    {
        public String Name { get; set; }
        public Int32 CountryId { get; set; }
    }
}