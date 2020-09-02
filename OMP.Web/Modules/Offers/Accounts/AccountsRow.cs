
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Accounts]")]
    [DisplayName("Accounts"), InstanceName("Account")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(AccountsLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class AccountsRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Account Id"), Identity]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
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

        [DisplayName("City"), ForeignKey(typeof(CitiesRow), "CityId"), LeftJoin("jCity"), TextualField("CityName")]
        [LookupEditor(typeof(CitiesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountsRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field AccountId;
            public StringField Name;
            public StringField Address;
            public StringField Phone;
            public Int32Field CityId;

            public StringField CityName;
            public Int32Field CityCountryId;
        }
    }
}
