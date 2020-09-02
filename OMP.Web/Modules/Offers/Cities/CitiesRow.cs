
using OMP.Administration.Entities;
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Cities]")]
    [DisplayName("Cities"), InstanceName("City")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(CitiesLangRow))]
    [LookupScript]
    public sealed class CitiesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("City Id"), Identity]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Country"), NotNull, ForeignKey(typeof(CountriesRow), "CountryId"), LeftJoin("jCountry"), TextualField("CountryName")]
        [LookupEditor(typeof(CountriesRow), FilterField = "IsActive", FilterValue = 1
            , InplaceAdd = true
        )]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }
        
        [DisplayName("Country Name"), Expression("jCountry.[Name]")]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.CityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        
        public static readonly RowFields Fields = new RowFields().Init();

        public CitiesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field CityId;
            public StringField Name;
            public Int32Field CountryId;

            public StringField CountryName;
        }
    }
}
