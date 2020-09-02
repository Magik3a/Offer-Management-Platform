
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[AccountsLang]")]
    [DisplayName("Accounts Lang"), InstanceName("Accounts Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AccountsLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Account"), NotNull, ForeignKey("[dbo].[Accounts]", "AccountId"), LeftJoin("jAccount"), TextualField("AccountName")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
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

        [DisplayName("Account Name"), Expression("jAccount.[Name]")]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Account Address"), Expression("jAccount.[Address]")]
        public String AccountAddress
        {
            get { return Fields.AccountAddress[this]; }
            set { Fields.AccountAddress[this] = value; }
        }

        [DisplayName("Account Phone"), Expression("jAccount.[Phone]")]
        public String AccountPhone
        {
            get { return Fields.AccountPhone[this]; }
            set { Fields.AccountPhone[this] = value; }
        }

        [DisplayName("Account City Id"), Expression("jAccount.[CityId]")]
        public Int32? AccountCityId
        {
            get { return Fields.AccountCityId[this]; }
            set { Fields.AccountCityId[this] = value; }
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

        public AccountsLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field AccountId;
            public Int32Field LanguageId;
            public StringField Name;
            public StringField Address;

            public StringField AccountName;
            public StringField AccountAddress;
            public StringField AccountPhone;
            public Int32Field AccountCityId;
        }
    }
}
