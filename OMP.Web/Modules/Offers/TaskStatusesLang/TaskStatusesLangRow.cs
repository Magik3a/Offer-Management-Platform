
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[TaskStatusesLang]")]
    [DisplayName("Task Statuses Lang"), InstanceName("Task Statuses Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TaskStatusesLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Task Status"), NotNull, ForeignKey("[dbo].[TaskStatuses]", "TaskStatusId"), LeftJoin("jTaskStatus"), TextualField("TaskStatusName")]
        public Int32? TaskStatusId
        {
            get { return Fields.TaskStatusId[this]; }
            set { Fields.TaskStatusId[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Task Status Name"), Expression("jTaskStatus.[Name]")]
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

        public TaskStatusesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TaskStatusId;
            public Int32Field LanguageId;
            public StringField Name;

            public StringField TaskStatusName;
            public StringField TaskStatusBorderColor;
            public StringField TaskStatusBackgroundColor;
        }
    }
}
