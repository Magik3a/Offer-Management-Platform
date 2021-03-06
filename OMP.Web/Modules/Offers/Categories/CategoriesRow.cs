﻿
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

    [ConnectionKey("Offers"), Module("Offers"), TableName("[dbo].[Categories]")]
    [DisplayName("Categories"), InstanceName("Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LocalizationRow(typeof(CategoriesLangRow))]
    [LookupScript(LookupType = typeof(OMPLocalizationLookupScript<>))]
    public sealed class CategoriesRow : OMPLoggingRow, IOMPLocalizationRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        [FontColorColumnFormatter(FontColorProperty = "FontColor")]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Font Color"), Size(50)]
        [ColorPickerEditor, LookupInclude]
        [ColoredColumnFormatter(BackgroundProperty ="FontColor", HideText = true)]
        public String FontColor
        {
            get { return Fields.FontColor[this]; }
            set { Fields.FontColor[this] = value; }
        }

        [DisplayName("Default Order"), SortOrder(1), DefaultValue(0), NotNull]
        [IntegerEditor(AllowNegatives = false)]
        public Int32? DefaultOrder
        {
            get { return Fields.DefaultOrder[this]; }
            set { Fields.DefaultOrder[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : OMPLoggingRowFields
        {
            public Int32Field CategoryId;
            public StringField Name;
            public Int32Field DefaultOrder;
            public StringField FontColor;
        }
    }
}
