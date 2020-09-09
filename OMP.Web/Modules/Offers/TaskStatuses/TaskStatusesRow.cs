
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[TaskStatuses]")]
    [DisplayName("Task Statuses"), InstanceName("Task Statuses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(TaskStatusesLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class TaskStatusesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Task Status Id"), Identity]
        public Int32? TaskStatusId
        {
            get { return Fields.TaskStatusId[this]; }
            set { Fields.TaskStatusId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        [ColoredColumnFormatter(BackgroundProperty = "BackgroundColor",BorderProperty = "BorderColor")]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Border Color"), Size(50)]
        [ColoredColumnFormatter(BackgroundProperty = "BorderColor", HideText = true)]
        [ColorPickerEditor]
        public String BorderColor
        {
            get { return Fields.BorderColor[this]; }
            set { Fields.BorderColor[this] = value; }
        }

        [DisplayName("Background Color"), Size(50)]
        [ColorPickerEditor]
        [ColoredColumnFormatter(BackgroundProperty = "BackgroundColor", HideText = true)]
        public String BackgroundColor
        {
            get { return Fields.BackgroundColor[this]; }
            set { Fields.BackgroundColor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TaskStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TaskStatusesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field TaskStatusId;
            public StringField Name;
            public StringField BorderColor;
            public StringField BackgroundColor;
        }
    }
}
