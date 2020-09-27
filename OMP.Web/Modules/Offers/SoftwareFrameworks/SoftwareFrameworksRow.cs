
using OMP.Administration.Entities;

namespace OMP.Offers.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[SoftwareFrameworks]")]
    [DisplayName("Software Frameworks"), InstanceName("Software Framework")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SoftwareFrameworksRow : OMPLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Software Framework Id"), Identity]
        public Int32? SoftwareFrameworkId
        {
            get { return Fields.SoftwareFrameworkId[this]; }
            set { Fields.SoftwareFrameworkId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        [ColoredColumnFormatter(BackgroundProperty = "BackgroundColor", BorderProperty = "BorderColor")]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        [TextAreaEditor( Rows = 10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Specific Version"), Size(500)]
        public String SpecificVersion
        {
            get { return Fields.SpecificVersion[this]; }
            set { Fields.SpecificVersion[this] = value; }
        }

        [ColorPickerEditor]
        [ColoredColumnFormatter(BackgroundProperty = "BorderColor", HideText = true)]
        [DisplayName("Border Color"), Size(50)]
        public String BorderColor
        {
            get { return Fields.BorderColor[this]; }
            set { Fields.BorderColor[this] = value; }
        }

        [ColorPickerEditor]
        [ColoredColumnFormatter(BackgroundProperty = "BackgroundColor", HideText = true)]
        [DisplayName("Background Color"), Size(50)]
        public String BackgroundColor
        {
            get { return Fields.BackgroundColor[this]; }
            set { Fields.BackgroundColor[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.SoftwareFrameworkId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SoftwareFrameworksRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field SoftwareFrameworkId;
            public StringField Name;
            public StringField Description;
            public StringField SpecificVersion;
            public StringField BorderColor;
            public StringField BackgroundColor;
        }
    }
}
