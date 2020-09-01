
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

    [ColumnsScript("Offers.Countries")]
    [BasedOnRow(typeof(Entities.CountriesRow), CheckNames = true)]
    public class CountriesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 CountryId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}