
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesForm
    {
        public String Name { get; set; }
        public Int32 CityId { get; set; }
        public Int32 PrimaryAccountId { get; set; }
        [Category("Extra info")]
        public String Address { get; set; }
        public String Phone { get; set; }
        [HalfWidth]
        public String AdditionalInfo { get; set; }

        [HalfWidth]
        public List<Entities.CompanyWebSitesRow> CompanyWebSites { get; set; }

    }
}