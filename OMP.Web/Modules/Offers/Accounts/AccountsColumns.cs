
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

    [ColumnsScript("Offers.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AccountId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String CompanyName { get; set; }
        public String CityName { get; set; }
    }
}