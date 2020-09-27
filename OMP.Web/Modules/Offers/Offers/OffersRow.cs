
using System.Collections.Generic;
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Offers]")]
    [DisplayName("Offers"), InstanceName("Offer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(OffersLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class OffersRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Offer Id"), Identity]
        public Int32? OfferId
        {
            get { return Fields.OfferId[this]; }
            set { Fields.OfferId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Discount"), Size(19), Scale(2), NotNull, DefaultValue(0)]
        [DisplayFormat("#,##0.00")]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Minimum Days Development Time"), NotNull, DefaultValue(0)]
        public Int32? MinimumDaysDevelopmentTime
        {
            get { return Fields.MinimumDaysDevelopmentTime[this]; }
            set { Fields.MinimumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Maximum Days Development Time"), NotNull, DefaultValue(1)]
        public Int32? MaximumDaysDevelopmentTime
        {
            get { return Fields.MaximumDaysDevelopmentTime[this]; }
            set { Fields.MaximumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        [DateEditor, DefaultValue("now")]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("Additional Info")]
        [TextAreaEditor( Rows = 10)]
        public String AdditionalInfo
        {
            get { return Fields.AdditionalInfo[this]; }
            set { Fields.AdditionalInfo[this] = value; }
        }

        [DisplayName("Company"), ForeignKey(typeof(CompaniesRow), "CompanyId"), LeftJoin("jCompany"), TextualField("CompanyName")]
        [LookupEditor(typeof(CompaniesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [QuickFilter, NotNull]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Offer Status"), NotNull, ForeignKey(typeof(OfferStatusesRow), "OfferStatusId"), LeftJoin("jOfferStatus"), TextualField("OfferStatusName")]
        [LookupEditor(typeof(OfferStatusesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [QuickFilter]
        public Int32? OfferStatusId
        {
            get { return Fields.OfferStatusId[this]; }
            set { Fields.OfferStatusId[this] = value; }
        }


        [DisplayName("Company Name"), Expression("jCompany.[Name]")]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Company Address"), Expression("jCompany.[Address]")]
        public String CompanyAddress
        {
            get { return Fields.CompanyAddress[this]; }
            set { Fields.CompanyAddress[this] = value; }
        }

        [DisplayName("Company Phone"), Expression("jCompany.[Phone]")]
        public String CompanyPhone
        {
            get { return Fields.CompanyPhone[this]; }
            set { Fields.CompanyPhone[this] = value; }
        }

        [DisplayName("Company City"), Expression("jCompany.[CityId]")]
        [QuickFilter]
        [LookupEditor(typeof(CitiesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CompanyCityId
        {
            get { return Fields.CompanyCityId[this]; }
            set { Fields.CompanyCityId[this] = value; }
        }

        [DisplayName("Company Primary Account Id"), Expression("jCompany.[PrimaryAccountId]")]
        public Int32? CompanyPrimaryAccountId
        {
            get { return Fields.CompanyPrimaryAccountId[this]; }
            set { Fields.CompanyPrimaryAccountId[this] = value; }
        }
        [DisplayName("Offer Status Name"), Expression("jOfferStatus.[Name]")]
        [ColoredColumnFormatter(BackgroundProperty = "OfferStatusBackgroundColor", BorderProperty = "OfferStatusBorderColor")]
        public String OfferStatusName
        {
            get { return Fields.OfferStatusName[this]; }
            set { Fields.OfferStatusName[this] = value; }
        }

        [DisplayName("Offer Status Border Color"), Expression("jOfferStatus.[BorderColor]")]
        public String OfferStatusBorderColor
        {
            get { return Fields.OfferStatusBorderColor[this]; }
            set { Fields.OfferStatusBorderColor[this] = value; }
        }

        [DisplayName("Offer Status Background Color"), Expression("jOfferStatus.[BackgroundColor]")]
        public String OfferStatusBackgroundColor
        {
            get { return Fields.OfferStatusBackgroundColor[this]; }
            set { Fields.OfferStatusBackgroundColor[this] = value; }
        }

        [DisplayName("Not Completed Tasks"), Expression(@"
(
SELECT COUNT(*)
  FROM [dbo].[OfferCategoryTasks] jOfferCategoryTasks
LEFT JOIN [dbo].[TaskStatuses] jTaskStatuses ON (jTaskStatuses.TaskStatusId = jOfferCategoryTasks.TaskStatusId) 
LEFT JOIN [dbo].[OfferCategories] jOfferCategories ON (jOfferCategories.OfferCategoryId = jOfferCategoryTasks.OfferCategoryId) 
WHERE (jOfferCategoryTasks.TaskStatusId is null OR jTaskStatuses.CountForCompleted <> 1)  AND jOfferCategories.OfferId = T0.[OfferId]
)
")]
        [ColoredColumnFormatter(BackgroundColor = "#FFF700")]
        public Int32? NotCompletedTasks
        {
            get { return Fields.NotCompletedTasks[this]; }
            set { Fields.NotCompletedTasks[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(2), DefaultValue(0)]
        [Expression(@"
 (
SELECT SUM(jOfferCategories.Price)
  FROM [dbo].[OfferCategories] jOfferCategories 
WHERE jOfferCategories.OfferId = T0.[OfferId]
)
")]
        [DisplayFormat("#,##0.00")]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }


        [DisplayName("Total Price"), Size(19), Scale(2), DefaultValue(0)]
        [Expression(@"
 (
SELECT SUM(jOfferCategories.Price) - T0.[Discount]
  FROM [dbo].[OfferCategories] jOfferCategories 
WHERE jOfferCategories.OfferId = T0.[OfferId]
)
")]
        [DisplayFormat("#,##0.00")]
        public Decimal? TotalPrice
        {
            get { return Fields.TotalPrice[this]; }
            set { Fields.TotalPrice[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OfferId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OffersRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field OfferId;
            public StringField Name;
            public DecimalField Discount;
            public Int32Field MinimumDaysDevelopmentTime;
            public Int32Field MaximumDaysDevelopmentTime;
            public DateTimeField StartDate;
            public StringField AdditionalInfo;
            public Int32Field CompanyId;
            public Int32Field OfferStatusId;

            public StringField CompanyName;
            public StringField CompanyAddress;
            public StringField CompanyPhone;
            public Int32Field CompanyCityId;
            public Int32Field CompanyPrimaryAccountId;

            public StringField OfferStatusName;
            public StringField OfferStatusBorderColor;
            public StringField OfferStatusBackgroundColor;


            public Int32Field NotCompletedTasks;
            public DecimalField Price;
            public DecimalField TotalPrice;
        }
    }
}
