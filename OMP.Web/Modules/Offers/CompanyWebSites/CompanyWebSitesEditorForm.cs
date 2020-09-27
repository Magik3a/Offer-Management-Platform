
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.CompanyWebSitesEditor")]
    [BasedOnRow(typeof(Entities.CompanyWebSitesRow), CheckNames = true)]
    public class CompanyWebSitesEditorForm
    {
        public String Name { get; set; }
    }
}