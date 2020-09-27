
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.CompanyWebSites")]
    [BasedOnRow(typeof(Entities.CompanyWebSitesRow), CheckNames = true)]
    public class CompanyWebSitesForm
    {
        public String Name { get; set; }
        public Int32 CompanyId { get; set; }
    }
}