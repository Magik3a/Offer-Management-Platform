
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[CompanyWebSites]")]
    [DisplayName("Company Web Sites"), InstanceName("Company Web Sites")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class CompanyWebSitesRow : OMPLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Company Web Site Id"), Identity]
        public Int32? CompanyWebSiteId
        {
            get { return Fields.CompanyWebSiteId[this]; }
            set { Fields.CompanyWebSiteId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Company"), NotNull,ForeignKey(typeof(CompaniesRow), "CompanyId"), LeftJoin("jCompany"), TextualField("CompanyName")]
        [LookupEditor(typeof(CompaniesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }
        
        [DisplayName("Company Name"), Expression("jCompany.[Name]")]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Company Address"), Expression("jCompany.[Address]")]
        public String CompanyAddress
        {
            get { return Fields.CompanyAddress[this]; }
            set { Fields.CompanyAddress[this] = value; }
        }

        [DisplayName("Company Phone"), Expression("jCompany.[Phone]")]
        public String CompanyPhone
        {
            get { return Fields.CompanyPhone[this]; }
            set { Fields.CompanyPhone[this] = value; }
        }

        [DisplayName("Company City Id"), Expression("jCompany.[CityId]")]
        public Int32? CompanyCityId
        {
            get { return Fields.CompanyCityId[this]; }
            set { Fields.CompanyCityId[this] = value; }
        }

        [DisplayName("Company Primary Account Id"), Expression("jCompany.[PrimaryAccountId]")]
        public Int32? CompanyPrimaryAccountId
        {
            get { return Fields.CompanyPrimaryAccountId[this]; }
            set { Fields.CompanyPrimaryAccountId[this] = value; }
        }

        [DisplayName("Company Additional Info"), Expression("jCompany.[AdditionalInfo]")]
        public String CompanyAdditionalInfo
        {
            get { return Fields.CompanyAdditionalInfo[this]; }
            set { Fields.CompanyAdditionalInfo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyWebSiteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyWebSitesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field CompanyWebSiteId;
            public StringField Name;
            public Int32Field CompanyId;

            public StringField CompanyName;
            public StringField CompanyAddress;
            public StringField CompanyPhone;
            public Int32Field CompanyCityId;
            public Int32Field CompanyPrimaryAccountId;
            public StringField CompanyAdditionalInfo;
        }
    }
}
