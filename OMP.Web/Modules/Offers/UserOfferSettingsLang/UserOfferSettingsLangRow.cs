
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[UserOfferSettingsLang]")]
    [DisplayName("User Offer Settings Lang"), InstanceName("User Offer Settings Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserOfferSettingsLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Offer Setting"), NotNull, ForeignKey("[dbo].[UserOfferSettings]", "UserOfferSettingId"), LeftJoin("jUserOfferSetting"), TextualField("UserOfferSettingOfferInvoiceAdditionalInfoFormatter")]
        public Int32? UserOfferSettingId
        {
            get { return Fields.UserOfferSettingId[this]; }
            set { Fields.UserOfferSettingId[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Offer Invoice Additional Info Formatter"), QuickSearch]
        public String OfferInvoiceAdditionalInfoFormatter
        {
            get { return Fields.OfferInvoiceAdditionalInfoFormatter[this]; }
            set { Fields.OfferInvoiceAdditionalInfoFormatter[this] = value; }
        }

        [DisplayName("Offer Invoice Footer Text")]
        public String OfferInvoiceFooterText
        {
            get { return Fields.OfferInvoiceFooterText[this]; }
            set { Fields.OfferInvoiceFooterText[this] = value; }
        }

        [DisplayName("Offer Invoice Footer Image"), Size(500)]
        public String OfferInvoiceFooterImage
        {
            get { return Fields.OfferInvoiceFooterImage[this]; }
            set { Fields.OfferInvoiceFooterImage[this] = value; }
        }

        [DisplayName("User Offer Setting Offer Invoice Additional Info Formatter"), Expression("jUserOfferSetting.[OfferInvoiceAdditionalInfoFormatter]")]
        public String UserOfferSettingOfferInvoiceAdditionalInfoFormatter
        {
            get { return Fields.UserOfferSettingOfferInvoiceAdditionalInfoFormatter[this]; }
            set { Fields.UserOfferSettingOfferInvoiceAdditionalInfoFormatter[this] = value; }
        }

        [DisplayName("User Offer Setting Offer Invoice Footer Text"), Expression("jUserOfferSetting.[OfferInvoiceFooterText]")]
        public String UserOfferSettingOfferInvoiceFooterText
        {
            get { return Fields.UserOfferSettingOfferInvoiceFooterText[this]; }
            set { Fields.UserOfferSettingOfferInvoiceFooterText[this] = value; }
        }

        [DisplayName("User Offer Setting Offer Invoice Footer Image"), Expression("jUserOfferSetting.[OfferInvoiceFooterImage]")]
        public String UserOfferSettingOfferInvoiceFooterImage
        {
            get { return Fields.UserOfferSettingOfferInvoiceFooterImage[this]; }
            set { Fields.UserOfferSettingOfferInvoiceFooterImage[this] = value; }
        }

        [DisplayName("User Offer Setting User Id"), Expression("jUserOfferSetting.[UserId]")]
        public Int32? UserOfferSettingUserId
        {
            get { return Fields.UserOfferSettingUserId[this]; }
            set { Fields.UserOfferSettingUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OfferInvoiceAdditionalInfoFormatter; }
        }
        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserOfferSettingsLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserOfferSettingId;
            public Int32Field LanguageId;
            public StringField OfferInvoiceAdditionalInfoFormatter;
            public StringField OfferInvoiceFooterText;
            public StringField OfferInvoiceFooterImage;

            public StringField UserOfferSettingOfferInvoiceAdditionalInfoFormatter;
            public StringField UserOfferSettingOfferInvoiceFooterText;
            public StringField UserOfferSettingOfferInvoiceFooterImage;
            public Int32Field UserOfferSettingUserId;
        }
    }
}
