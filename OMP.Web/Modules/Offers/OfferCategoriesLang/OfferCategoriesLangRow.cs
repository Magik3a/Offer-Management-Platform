
using OMP.Localization;

namespace OMP.Offers.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferCategoriesLang]")]
    [DisplayName("Offer Categories Lang"), InstanceName("Offer Categories Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OfferCategoriesLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Offer Category"), NotNull, ForeignKey("[dbo].[OfferCategories]", "OfferCategoryId"), LeftJoin("jOfferCategory"), TextualField("OfferCategoryCategoryNameReport")]
        public Int32? OfferCategoryId
        {
            get { return Fields.OfferCategoryId[this]; }
            set { Fields.OfferCategoryId[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Category Name Report"), Size(500), QuickSearch]
        public String CategoryNameReport
        {
            get { return Fields.CategoryNameReport[this]; }
            set { Fields.CategoryNameReport[this] = value; }
        }

        [DisplayName("Offer Category Offer Id"), Expression("jOfferCategory.[OfferId]")]
        public Int32? OfferCategoryOfferId
        {
            get { return Fields.OfferCategoryOfferId[this]; }
            set { Fields.OfferCategoryOfferId[this] = value; }
        }

        [DisplayName("Offer Category Category Id"), Expression("jOfferCategory.[CategoryId]")]
        public Int32? OfferCategoryCategoryId
        {
            get { return Fields.OfferCategoryCategoryId[this]; }
            set { Fields.OfferCategoryCategoryId[this] = value; }
        }

        [DisplayName("Offer Category Price"), Expression("jOfferCategory.[Price]")]
        public Decimal? OfferCategoryPrice
        {
            get { return Fields.OfferCategoryPrice[this]; }
            set { Fields.OfferCategoryPrice[this] = value; }
        }

        [DisplayName("Offer Category Category Name Report"), Expression("jOfferCategory.[CategoryNameReport]")]
        public String OfferCategoryCategoryNameReport
        {
            get { return Fields.OfferCategoryCategoryNameReport[this]; }
            set { Fields.OfferCategoryCategoryNameReport[this] = value; }
        }

        [DisplayName("Offer Category Category Font Color Report"), Expression("jOfferCategory.[CategoryFontColorReport]")]
        public String OfferCategoryCategoryFontColorReport
        {
            get { return Fields.OfferCategoryCategoryFontColorReport[this]; }
            set { Fields.OfferCategoryCategoryFontColorReport[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryNameReport; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferCategoriesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OfferCategoryId;
            public Int32Field LanguageId;
            public StringField CategoryNameReport;

            public Int32Field OfferCategoryOfferId;
            public Int32Field OfferCategoryCategoryId;
            public DecimalField OfferCategoryPrice;
            public StringField OfferCategoryCategoryNameReport;
            public StringField OfferCategoryCategoryFontColorReport;
        }
    }
}
