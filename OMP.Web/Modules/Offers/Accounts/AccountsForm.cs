
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsForm
    {
        public String Name { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public Int32 CompanyId { get; set; }
        public Int32 CityId { get; set; }
    }
}