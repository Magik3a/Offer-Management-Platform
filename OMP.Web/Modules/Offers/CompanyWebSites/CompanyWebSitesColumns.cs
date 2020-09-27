
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

    [ColumnsScript("Offers.CompanyWebSites")]
    [BasedOnRow(typeof(Entities.CompanyWebSitesRow), CheckNames = true)]
    public class CompanyWebSitesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CompanyWebSiteId { get; set; }
        [QuickFilter, FilterOnly]
        public Int32 CompanyId { get; set; }


        [EditLink]
        public String Name { get; set; }
        public String CompanyName { get; set; }
    }
}