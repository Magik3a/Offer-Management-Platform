
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[CompaniesLang]")]
    [DisplayName("Companies Lang"), InstanceName("Companies Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CompaniesLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company"), NotNull, ForeignKey("[dbo].[Companies]", "CompanyId"), LeftJoin("jCompany"), TextualField("CompanyName")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
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

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
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

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompaniesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CompanyId;
            public Int32Field LanguageId;
            public StringField Name;
            public StringField Address;

            public StringField CompanyName;
            public StringField CompanyAddress;
            public StringField CompanyPhone;
            public Int32Field CompanyCityId;
            public Int32Field CompanyPrimaryAccountId;
        }
    }
}
