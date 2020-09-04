
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferCategoryTasksLang]")]
    [DisplayName("Offer Category Tasks Lang"), InstanceName("Offer Category Tasks Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OfferCategoryTasksLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Offer Category Task"), NotNull, ForeignKey("[dbo].[OfferCategoryTasks]", "OfferCategoryTaskId"), LeftJoin("jOfferCategoryTask"), TextualField("OfferCategoryTaskName")]
        public Int32? OfferCategoryTaskId
        {
            get { return Fields.OfferCategoryTaskId[this]; }
            set { Fields.OfferCategoryTaskId[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Name"), Size(2000), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Offer Category Task Name"), Expression("jOfferCategoryTask.[Name]")]
        public String OfferCategoryTaskName
        {
            get { return Fields.OfferCategoryTaskName[this]; }
            set { Fields.OfferCategoryTaskName[this] = value; }
        }

        [DisplayName("Offer Category Task Development Time Hours"), Expression("jOfferCategoryTask.[DevelopmentTimeHours]")]
        public Decimal? OfferCategoryTaskDevelopmentTimeHours
        {
            get { return Fields.OfferCategoryTaskDevelopmentTimeHours[this]; }
            set { Fields.OfferCategoryTaskDevelopmentTimeHours[this] = value; }
        }

        [DisplayName("Offer Category Task Description"), Expression("jOfferCategoryTask.[Description]")]
        public String OfferCategoryTaskDescription
        {
            get { return Fields.OfferCategoryTaskDescription[this]; }
            set { Fields.OfferCategoryTaskDescription[this] = value; }
        }

        [DisplayName("Offer Category Task Parent Offer Category Task Id"), Expression("jOfferCategoryTask.[ParentOfferCategoryTaskId]")]
        public Int32? OfferCategoryTaskParentOfferCategoryTaskId
        {
            get { return Fields.OfferCategoryTaskParentOfferCategoryTaskId[this]; }
            set { Fields.OfferCategoryTaskParentOfferCategoryTaskId[this] = value; }
        }

        [DisplayName("Offer Category Task Offer Category Id"), Expression("jOfferCategoryTask.[OfferCategoryId]")]
        public Int32? OfferCategoryTaskOfferCategoryId
        {
            get { return Fields.OfferCategoryTaskOfferCategoryId[this]; }
            set { Fields.OfferCategoryTaskOfferCategoryId[this] = value; }
        }

        [DisplayName("Offer Category Task Task Status Id"), Expression("jOfferCategoryTask.[TaskStatusId]")]
        public Int32? OfferCategoryTaskTaskStatusId
        {
            get { return Fields.OfferCategoryTaskTaskStatusId[this]; }
            set { Fields.OfferCategoryTaskTaskStatusId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferCategoryTasksLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OfferCategoryTaskId;
            public Int32Field LanguageId;
            public StringField Name;
            public StringField Description;

            public StringField OfferCategoryTaskName;
            public DecimalField OfferCategoryTaskDevelopmentTimeHours;
            public StringField OfferCategoryTaskDescription;
            public Int32Field OfferCategoryTaskParentOfferCategoryTaskId;
            public Int32Field OfferCategoryTaskOfferCategoryId;
            public Int32Field OfferCategoryTaskTaskStatusId;
        }
    }
}
