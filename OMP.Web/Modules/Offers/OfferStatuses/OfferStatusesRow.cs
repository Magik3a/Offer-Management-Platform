
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferStatuses]")]
    [DisplayName("Offer Statuses"), InstanceName("Offer Statuses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(OfferStatusesLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class OfferStatusesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Offer Status Id"), Identity]
        public Int32? OfferStatusId
        {
            get { return Fields.OfferStatusId[this]; }
            set { Fields.OfferStatusId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        [ColoredColumnFormatter(BackgroundProperty = "BackgroundColor",BorderProperty = "BorderColor")]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Border Color"), Size(50)]
        [ColorPickerEditor]
        [ColoredColumnFormatter(BackgroundProperty = "BorderColor", HideText = true)]
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
            get { return Fields.OfferStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferStatusesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field OfferStatusId;
            public StringField Name;
            public StringField BorderColor;
            public StringField BackgroundColor;
        }
    }
}
