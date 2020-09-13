
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferCategoryTasks]")]
    [DisplayName("Offer Category Tasks"), InstanceName("Offer Category Task")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(OfferCategoryTasksLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class OfferCategoryTasksRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Offer Category Task Id"), Identity]
        public Int32? OfferCategoryTaskId
        {
            get { return Fields.OfferCategoryTaskId[this]; }
            set { Fields.OfferCategoryTaskId[this] = value; }
        }

        [DisplayName("Name"), Size(2000), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Development Time Hours"), Size(6), Scale(2), DefaultValue(0), NotNull]
        public Decimal? DevelopmentTimeHours
        {
            get { return Fields.DevelopmentTimeHours[this]; }
            set { Fields.DevelopmentTimeHours[this] = value; }
        }

        [DisplayName("Description")]
        [TextAreaEditor( Rows = 10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Order"), SortOrder(1), DefaultValue(0), NotNull]
        [IntegerEditor(AllowNegatives = false)]
        public Int32? Order
        {
            get { return Fields.Order[this]; }
            set { Fields.Order[this] = value; }
        }

        [DisplayName("Parent Offer Category Task"), ForeignKey(typeof(OfferCategoryTasksRow), "OfferCategoryTaskId"), LeftJoin("jParentOfferCategoryTask"), TextualField("ParentOfferCategoryTaskName")]
        [LookupEditor(typeof(OfferCategoryTasksRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true, CascadeField = "OfferCategoryOfferId", CascadeFrom = "OfferCategoryOfferId"
        )]
        [LookupInclude]
        public Int32? ParentOfferCategoryTaskId
        {
            get { return Fields.ParentOfferCategoryTaskId[this]; }
            set { Fields.ParentOfferCategoryTaskId[this] = value; }
        }

        [DisplayName("Offer Category"), NotNull, ForeignKey(typeof(OfferCategoriesRow), "OfferCategoryId"), LeftJoin("jOfferCategory"), TextualField("OfferCategoryCategoryNameReport")]
        [LookupEditor(typeof(OfferCategoriesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true, CascadeField = "OfferId", CascadeFrom = "OfferCategoryOfferId"
        )]
        [LookupInclude]
        public Int32? OfferCategoryId
        {
            get { return Fields.OfferCategoryId[this]; }
            set { Fields.OfferCategoryId[this] = value; }
        }

        [DisplayName("Task Status"), ForeignKey(typeof(TaskStatusesRow), "TaskStatusId"), LeftJoin("jTaskStatus"), TextualField("TaskStatusName")]
        [LookupEditor(typeof(TaskStatusesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? TaskStatusId
        {
            get { return Fields.TaskStatusId[this]; }
            set { Fields.TaskStatusId[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Name"), Expression("jParentOfferCategoryTask.[Name]")]
        public String ParentOfferCategoryTaskName
        {
            get { return Fields.ParentOfferCategoryTaskName[this]; }
            set { Fields.ParentOfferCategoryTaskName[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Development Time Hours"), Expression("jParentOfferCategoryTask.[DevelopmentTimeHours]")]
        public Decimal? ParentOfferCategoryTaskDevelopmentTimeHours
        {
            get { return Fields.ParentOfferCategoryTaskDevelopmentTimeHours[this]; }
            set { Fields.ParentOfferCategoryTaskDevelopmentTimeHours[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Description"), Expression("jParentOfferCategoryTask.[Description]")]
        public String ParentOfferCategoryTaskDescription
        {
            get { return Fields.ParentOfferCategoryTaskDescription[this]; }
            set { Fields.ParentOfferCategoryTaskDescription[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Parent Offer Category Task Id"), Expression("jParentOfferCategoryTask.[ParentOfferCategoryTaskId]")]
        public Int32? ParentOfferCategoryTaskParentOfferCategoryTaskId
        {
            get { return Fields.ParentOfferCategoryTaskParentOfferCategoryTaskId[this]; }
            set { Fields.ParentOfferCategoryTaskParentOfferCategoryTaskId[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Offer Category Id"), Expression("jParentOfferCategoryTask.[OfferCategoryId]")]
        public Int32? ParentOfferCategoryTaskOfferCategoryId
        {
            get { return Fields.ParentOfferCategoryTaskOfferCategoryId[this]; }
            set { Fields.ParentOfferCategoryTaskOfferCategoryId[this] = value; }
        }

        [DisplayName("Parent Offer Category Task Task Status Id"), Expression("jParentOfferCategoryTask.[TaskStatusId]")]
        public Int32? ParentOfferCategoryTaskTaskStatusId
        {
            get { return Fields.ParentOfferCategoryTaskTaskStatusId[this]; }
            set { Fields.ParentOfferCategoryTaskTaskStatusId[this] = value; }
        }


        [DisplayName("Offer Category Offer Id"), Expression("jOfferCategory.[OfferId]")]
        [ForeignKey(typeof(OffersRow), "OfferId"), LeftJoin("jOffer"), TextualField("OfferName")]
        [LookupEditor(typeof(OffersRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [LookupInclude, MinSelectLevel(SelectLevel.List), NotNull]
        public Int32? OfferCategoryOfferId
        {
            get { return Fields.OfferCategoryOfferId[this]; }
            set { Fields.OfferCategoryOfferId[this] = value; }
        }

        [DisplayName("Offer Name"), Expression("jOffer.[Name]")]
        public String OfferName
        {
            get { return Fields.OfferName[this]; }
            set { Fields.OfferName[this] = value; }
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
        [FontColorColumnFormatter(FontColorProperty = "OfferCategoryCategoryFontColorReport")]
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

        [DisplayName("Task Status Name"), Expression("jTaskStatus.[Name]")]
        [ColoredColumnFormatter(BackgroundProperty = "TaskStatusBackgroundColor", BorderProperty = "TaskStatusBorderColor")]
        public String TaskStatusName
        {
            get { return Fields.TaskStatusName[this]; }
            set { Fields.TaskStatusName[this] = value; }
        }

        [DisplayName("Task Status Border Color"), Expression("jTaskStatus.[BorderColor]")]
        public String TaskStatusBorderColor
        {
            get { return Fields.TaskStatusBorderColor[this]; }
            set { Fields.TaskStatusBorderColor[this] = value; }
        }

        [DisplayName("Task Status Background Color"), Expression("jTaskStatus.[BackgroundColor]")]
        public String TaskStatusBackgroundColor
        {
            get { return Fields.TaskStatusBackgroundColor[this]; }
            set { Fields.TaskStatusBackgroundColor[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.OfferCategoryTaskId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferCategoryTasksRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field OfferCategoryTaskId;
            public StringField Name;
            public DecimalField DevelopmentTimeHours;
            public StringField Description;
            public Int32Field ParentOfferCategoryTaskId;
            public Int32Field OfferCategoryId;
            public Int32Field TaskStatusId;
            public Int32Field Order;

            public StringField ParentOfferCategoryTaskName;
            public DecimalField ParentOfferCategoryTaskDevelopmentTimeHours;
            public StringField ParentOfferCategoryTaskDescription;
            public Int32Field ParentOfferCategoryTaskParentOfferCategoryTaskId;
            public Int32Field ParentOfferCategoryTaskOfferCategoryId;
            public Int32Field ParentOfferCategoryTaskTaskStatusId;

            public Int32Field OfferCategoryOfferId;
            public Int32Field OfferCategoryCategoryId;
            public DecimalField OfferCategoryPrice;
            public StringField OfferCategoryCategoryNameReport;
            public StringField OfferCategoryCategoryFontColorReport;

            public StringField TaskStatusName;
            public StringField TaskStatusBorderColor;
            public StringField TaskStatusBackgroundColor;

            public StringField OfferName;

        }
    }
}
