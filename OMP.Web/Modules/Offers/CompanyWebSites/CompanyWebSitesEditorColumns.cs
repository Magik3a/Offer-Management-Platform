
using OMP.Administration.Logging;

namespace OMP.Offers.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Offers.CompanyWebSitesEditor")]
    [BasedOnRow(typeof(Entities.CompanyWebSitesRow), CheckNames = true)]
    public class CompanyWebSitesEditorColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 CompanyWebSiteId { get; set; }
        [EditLink]
        [Width(350)]
        public String Name { get; set; } 
    }
}