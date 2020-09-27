
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

    [ColumnsScript("Offers.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CompanyId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String CityName { get; set; }
        public String PrimaryAccountName { get; set; }

        [Width(300)]
        public String AdditionalInfo { get; set; }
    }
}