
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[OfferAttachments]")]
    [DisplayName("Offer Attachments"), InstanceName("Offer Attachment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OfferAttachmentsRow : OMPLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Offer Attachment Id"), Identity]
        public Int32? OfferAttachmentId
        {
            get { return Fields.OfferAttachmentId[this]; }
            set { Fields.OfferAttachmentId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch, NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        [HtmlContentEditor(Rows = 12)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Files"), Size(500), NotNull]
        [MultipleFileUploadEditor(AllowNonImage = true)]
        [MultipleFileDownloadFormatter(ShowFileNames = true)]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Offer"), NotNull, ForeignKey("[dbo].[Offers]", "OfferId"), LeftJoin("jOffer"), TextualField("OfferName")]
        [LookupEditor(typeof(OffersRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        [QuickFilter]
        public Int32? OfferId
        {
            get { return Fields.OfferId[this]; }
            set { Fields.OfferId[this] = value; }
        }
        [DisplayName("Offer Name"), Expression("jOffer.[Name]")]
        public String OfferName
        {
            get { return Fields.OfferName[this]; }
            set { Fields.OfferName[this] = value; }
        }

        [DisplayName("Offer Discount"), Expression("jOffer.[Discount]")]
        public Decimal? OfferDiscount
        {
            get { return Fields.OfferDiscount[this]; }
            set { Fields.OfferDiscount[this] = value; }
        }

        [DisplayName("Offer Minimum Days Development Time"), Expression("jOffer.[MinimumDaysDevelopmentTime]")]
        public Int32? OfferMinimumDaysDevelopmentTime
        {
            get { return Fields.OfferMinimumDaysDevelopmentTime[this]; }
            set { Fields.OfferMinimumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Offer Maximum Days Development Time"), Expression("jOffer.[MaximumDaysDevelopmentTime]")]
        public Int32? OfferMaximumDaysDevelopmentTime
        {
            get { return Fields.OfferMaximumDaysDevelopmentTime[this]; }
            set { Fields.OfferMaximumDaysDevelopmentTime[this] = value; }
        }

        [DisplayName("Offer Start Date"), Expression("jOffer.[StartDate]")]
        public DateTime? OfferStartDate
        {
            get { return Fields.OfferStartDate[this]; }
            set { Fields.OfferStartDate[this] = value; }
        }

        [DisplayName("Offer Additional Info"), Expression("jOffer.[AdditionalInfo]")]
        public String OfferAdditionalInfo
        {
            get { return Fields.OfferAdditionalInfo[this]; }
            set { Fields.OfferAdditionalInfo[this] = value; }
        }

        [DisplayName("Offer Company Id"), Expression("jOffer.[CompanyId]")]
        public Int32? OfferCompanyId
        {
            get { return Fields.OfferCompanyId[this]; }
            set { Fields.OfferCompanyId[this] = value; }
        }

        [DisplayName("Offer Offer Status Id"), Expression("jOffer.[OfferStatusId]")]
        public Int32? OfferOfferStatusId
        {
            get { return Fields.OfferOfferStatusId[this]; }
            set { Fields.OfferOfferStatusId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OfferAttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OfferAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field OfferAttachmentId;
            public StringField Name;
            public StringField Description;
            public StringField FilePath;
            public Int32Field OfferId;

            public StringField OfferName;
            public DecimalField OfferDiscount;
            public Int32Field OfferMinimumDaysDevelopmentTime;
            public Int32Field OfferMaximumDaysDevelopmentTime;
            public DateTimeField OfferStartDate;
            public StringField OfferAdditionalInfo;
            public Int32Field OfferCompanyId;
            public Int32Field OfferOfferStatusId;
        }
    }
}
