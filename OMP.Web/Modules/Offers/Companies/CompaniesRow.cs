
using System.Collections.Generic;
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
    using System.ComponentModel.DataAnnotations;
    using System.IO;

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Companies]")]
    [DisplayName("Companies"), InstanceName("Company")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(CompaniesLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class CompaniesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Company Id"), Identity]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
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

        [DisplayName("Phone"), Size(200)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Additional Info")]
        [TextAreaEditor(Rows = 10)]
        public String AdditionalInfo
        {
            get { return Fields.AdditionalInfo[this]; }
            set { Fields.AdditionalInfo[this] = value; }
        }

        [DisplayName("City"), ForeignKey(typeof(CitiesRow), "CityId"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Primary Account"), ForeignKey(typeof(AccountsRow), "AccountId"), LeftJoin("jPrimaryAccount"), TextualField("PrimaryAccountName")]
        [LookupEditor(typeof(AccountsRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? PrimaryAccountId
        {
            get { return Fields.PrimaryAccountId[this]; }
            set { Fields.PrimaryAccountId[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("City Country Id"), Expression("jCity.[CountryId]")]
        public Int32? CityCountryId
        {
            get { return Fields.CityCountryId[this]; }
            set { Fields.CityCountryId[this] = value; }
        }

        [DisplayName("Primary Account Name"), Expression("jPrimaryAccount.[Name]")]
        public String PrimaryAccountName
        {
            get { return Fields.PrimaryAccountName[this]; }
            set { Fields.PrimaryAccountName[this] = value; }
        }

        [DisplayName("Primary Account Address"), Expression("jPrimaryAccount.[Address]")]
        public String PrimaryAccountAddress
        {
            get { return Fields.PrimaryAccountAddress[this]; }
            set { Fields.PrimaryAccountAddress[this] = value; }
        }

        [DisplayName("Primary Account Phone"), Expression("jPrimaryAccount.[Phone]")]
        public String PrimaryAccountPhone
        {
            get { return Fields.PrimaryAccountPhone[this]; }
            set { Fields.PrimaryAccountPhone[this] = value; }
        }

        [DisplayName("Primary Account City Id"), Expression("jPrimaryAccount.[CityId]")]
        public Int32? PrimaryAccountCityId
        {
            get { return Fields.PrimaryAccountCityId[this]; }
            set { Fields.PrimaryAccountCityId[this] = value; }
        }

        [DisplayName("Company Web Sites"), MasterDetailRelation(foreignKey: "CompanyId"), NotMapped]
        [CompanyWebSitesEditor]
        public List<CompanyWebSitesRow> CompanyWebSites
        {
            get { return Fields.CompanyWebSites[this]; }
            set { Fields.CompanyWebSites[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompaniesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field CompanyId;
            public StringField Name;
            public StringField Address;
            public StringField Phone;
            public StringField AdditionalInfo;
            public Int32Field CityId;
            public Int32Field PrimaryAccountId;

            public StringField CityName;
            public Int32Field CityCountryId;

            public StringField PrimaryAccountName;
            public StringField PrimaryAccountAddress;
            public StringField PrimaryAccountPhone;
            public Int32Field PrimaryAccountCityId;


            public RowListField<CompanyWebSitesRow> CompanyWebSites;
        }
    }
}
