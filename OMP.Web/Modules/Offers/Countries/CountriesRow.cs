
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Countries]")]
    [DisplayName("Countries"), InstanceName("Country")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(CountriesLangRow))]
    [LookupScript]
    public sealed class CountriesRow : OMPLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Country Id"), Identity]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CountryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CountriesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field CountryId;
            public StringField Name;
        }
    }
}
