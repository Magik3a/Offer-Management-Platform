
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferStatusesLang]")]
    [DisplayName("Offer Statuses Lang"), InstanceName("Offer Statuses Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OfferStatusesLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Offer Status"), NotNull, ForeignKey("[dbo].[OfferStatuses]", "OfferStatusId"), LeftJoin("jOfferStatus"), TextualField("OfferStatusName")]
        public Int32? OfferStatusId
        {
            get { return Fields.OfferStatusId[this]; }
            set { Fields.OfferStatusId[this] = value; }
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

        [DisplayName("Offer Status Name"), Expression("jOfferStatus.[Name]")]
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

        public OfferStatusesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field OfferStatusId;
            public Int32Field LanguageId;
            public StringField Name;

            public StringField OfferStatusName;
            public StringField OfferStatusBorderColor;
            public StringField OfferStatusBackgroundColor;
        }
    }
}
