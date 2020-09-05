
using OMP.Administration.Entities;
using OMP.Administration.Services;
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferCategories]")]
    [DisplayName("Offer Categories"), InstanceName("Offer Categories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(OfferCategoriesLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class OfferCategoriesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Offer Category Id"), Identity]
        public Int32? OfferCategoryId
        {
            get { return Fields.OfferCategoryId[this]; }
            set { Fields.OfferCategoryId[this] = value; }
        }

        [DisplayName("Offer"), NotNull, ForeignKey(typeof(OffersRow), "OfferId"), LeftJoin("jOffer"), TextualField("OfferName")]
        [LookupEditor(typeof(OffersRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [LookupInclude]
        public Int32? OfferId
        {
            get { return Fields.OfferId[this]; }
            set { Fields.OfferId[this] = value; }
        }

        [DisplayName("Category"), NotNull, ForeignKey(typeof(CategoriesRow), "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryName")]
        [LookupEditor(typeof(CategoriesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4), NotNull]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Category Name Report"), Size(500), NotNull, QuickSearch]
        public String CategoryNameReport
        {
            get { return Fields.CategoryNameReport[this]; }
            set { Fields.CategoryNameReport[this] = value; }
        }

        [DisplayName("Category Font Color Report"), Size(50)]
        public String CategoryFontColorReport
        {
            get { return Fields.CategoryFontColorReport[this]; }
            set { Fields.CategoryFontColorReport[this] = value; }
        }
        
        [DisplayName("Offer Name"), Expression("jOffer.[Name]")]
        public String OfferName
        {
            get { return Fields.OfferName[this]; }
            set { Fields.OfferName[this] = value; }
        }

        [DisplayName("Offer Discount"), Expression("jOffer.[Discount]")]
        public Decimal? OfferDiscount
        {
            get { return Fields.OfferDiscount[this]; }
            set { Fields.OfferDiscount[this] = value; }
        }

        [DisplayName("Offer Minimum Days Development Time"), Expression("jOffer.[MinimumDaysDevelopmentTime]")]
        public Int32? OfferMinimumDaysDevelopmentTime
        {
            get { return Fields.OfferMinimumDaysDevelopmentTime[this]; }
            set { Fields.OfferMinimumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Offer Maximum Days Development Time"), Expression("jOffer.[MaximumDaysDevelopmentTime]")]
        public Int32? OfferMaximumDaysDevelopmentTime
        {
            get { return Fields.OfferMaximumDaysDevelopmentTime[this]; }
            set { Fields.OfferMaximumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Offer Start Date"), Expression("jOffer.[StartDate]")]
        public DateTime? OfferStartDate
        {
            get { return Fields.OfferStartDate[this]; }
            set { Fields.OfferStartDate[this] = value; }
        }

        [DisplayName("Offer Additional Info"), Expression("jOffer.[AdditionalInfo]")]
        public String OfferAdditionalInfo
        {
            get { return Fields.OfferAdditionalInfo[this]; }
            set { Fields.OfferAdditionalInfo[this] = value; }
        }

        [DisplayName("Offer Company Id"), Expression("jOffer.[CompanyId]")]
        public Int32? OfferCompanyId
        {
            get { return Fields.OfferCompanyId[this]; }
            set { Fields.OfferCompanyId[this] = value; }
        }

        [DisplayName("Offer Offer Status Id"), Expression("jOffer.[OfferStatusId]")]
        public Int32? OfferOfferStatusId
        {
            get { return Fields.OfferOfferStatusId[this]; }
            set { Fields.OfferOfferStatusId[this] = value; }
        }
        
        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Font Color"), Expression("jCategory.[FontColor]")]
        public String CategoryFontColor
        {
            get { return Fields.CategoryFontColor[this]; }
            set { Fields.CategoryFontColor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OfferCategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryNameReport; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferCategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field OfferCategoryId;
            public Int32Field OfferId;
            public Int32Field CategoryId;
            public DecimalField Price;
            public StringField CategoryNameReport;
            public StringField CategoryFontColorReport;

            public StringField OfferName;
            public DecimalField OfferDiscount;
            public Int32Field OfferMinimumDaysDevelopmentTime;
            public Int32Field OfferMaximumDaysDevelopmentTime;
            public DateTimeField OfferStartDate;
            public StringField OfferAdditionalInfo;
            public Int32Field OfferCompanyId;
            public Int32Field OfferOfferStatusId;

            public StringField CategoryName;
            public StringField CategoryFontColor;
        }
    }
}
