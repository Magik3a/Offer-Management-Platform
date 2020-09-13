
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

    [ColumnsScript("Offers.UserOfferSettings")]
    [BasedOnRow(typeof(Entities.UserOfferSettingsRow), CheckNames = true)]
    public class UserOfferSettingsColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 UserOfferSettingId { get; set; }
        [EditLink]
        [Width(300)]
        public String OfferInvoiceAdditionalInfoFormatter { get; set; }
       // public String OfferInvoiceFooterText { get; set; }
        public String OfferInvoiceFooterImage { get; set; }
        [FilterOnly]
        public Int32 UserId { get; set; }
        public String UserName { get; set; }

    }
}