
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

    [ColumnsScript("Offers.OfferCategories")]
    [BasedOnRow(typeof(Entities.OfferCategoriesRow), CheckNames = true)]
    public class OfferCategoriesColumns : OMPLoggingRowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 OfferCategoryId { get; set; }
        [FilterOnly]
        public Int32 CategoryId { get; set; }

        [EditLink]
        [Width(700)]
        public String CategoryNameReport { get; set; }
        public Decimal Price { get; set; }
    }
}