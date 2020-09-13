
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

    [ColumnsScript("Offers.OfferAttachments")]
    [BasedOnRow(typeof(Entities.OfferAttachmentsRow), CheckNames = true)]
    public class OfferAttachmentsColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferAttachmentId { get; set; }
        [FilterOnly]
        public Int32 OfferId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public String FilePath { get; set; }
        public String OfferName { get; set; }
    }
}