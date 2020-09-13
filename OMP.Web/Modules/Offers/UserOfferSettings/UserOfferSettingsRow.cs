
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[UserOfferSettings]")]
    [DisplayName("User Offer Settings"), InstanceName("User Offer Setting")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(UserOfferSettingsLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class UserOfferSettingsRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("User Offer Setting Id"), Identity]
        public Int32? UserOfferSettingId
        {
            get { return Fields.UserOfferSettingId[this]; }
            set { Fields.UserOfferSettingId[this] = value; }
        }

        [DisplayName("Offer Invoice Additional Info Formatter"), QuickSearch]
        [TextAreaEditor(Rows = 8)]
        public String OfferInvoiceAdditionalInfoFormatter
        {
            get { return Fields.OfferInvoiceAdditionalInfoFormatter[this]; }
            set { Fields.OfferInvoiceAdditionalInfoFormatter[this] = value; }
        }

        [DisplayName("Offer Invoice Footer Text")]
        //[HtmlContentEditor]
        [TextAreaEditor(Rows = 8)]
        public String OfferInvoiceFooterText
        {
            get { return Fields.OfferInvoiceFooterText[this]; }
            set { Fields.OfferInvoiceFooterText[this] = value; }
        }

        [DisplayName("Offer Invoice Footer Image"), Size(500)]
        [ImageUploadEditor, FileDownloadFormatter]
        public String OfferInvoiceFooterImage
        {
            get { return Fields.OfferInvoiceFooterImage[this]; }
            set { Fields.OfferInvoiceFooterImage[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        [LookupEditor(typeof(UserRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [QuickFilter]
        [LookupInclude]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Name"), NotMapped]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserOfferSettingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OfferInvoiceAdditionalInfoFormatter; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserOfferSettingsRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field UserOfferSettingId;
            public StringField OfferInvoiceAdditionalInfoFormatter;
            public StringField OfferInvoiceFooterText;
            public StringField OfferInvoiceFooterImage;
            public Int32Field UserId;
            public StringField UserName;
        }
    }
}
