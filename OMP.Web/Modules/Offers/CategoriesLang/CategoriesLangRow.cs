
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[CategoriesLang]")]
    [DisplayName("Categories Lang"), InstanceName("Categories Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CategoriesLangRow : Row, IOMPLocalizationLangRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Category"), NotNull, ForeignKey("[dbo].[Categories]", "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryName")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
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

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Font Color"), Expression("jCategory.[FontColor]")]
        public String CategoryFontColor
        {
            get { return Fields.CategoryFontColor[this]; }
            set { Fields.CategoryFontColor[this] = value; }
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

        public CategoriesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CategoryId;
            public Int32Field LanguageId;
            public StringField Name;

            public StringField CategoryName;
            public StringField CategoryFontColor;
        }
    }
}
