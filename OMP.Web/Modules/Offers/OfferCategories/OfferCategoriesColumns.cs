
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferCategoryId { get; set; }
        [EditLink]
        public String OfferName { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
        public Decimal Price { get; set; }
        [EditLink]
        public String CategoryNameReport { get; set; }
        public String CategoryFontColorReport { get; set; }
    }
}