
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[CitiesLang]")]
    [DisplayName("Cities Lang"), InstanceName("Cities Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CitiesLangRow : Row,  IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("City"), NotNull, ForeignKey("[dbo].[Cities]", "CityId"), LeftJoin("jCity"), TextualField("CityName")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
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

        public CitiesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CityId;
            public Int32Field LanguageId;
            public StringField Name;

            public StringField CityName;
            public Int32Field CityCountryId;
        }
    }
}
