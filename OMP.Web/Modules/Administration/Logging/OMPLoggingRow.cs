using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using OMP.Web.Modules.Offers;

namespace OMP.Administration.Entities
{
    public abstract class OMPLoggingRow :  Row, ILoggingRow, IIsActiveDeletedRow
    {
        protected OMPLoggingRow(RowFieldsBase fields)
        : base(fields)
        {
            loggingFields = (OMPLoggingRowFields)fields;
        }

        [NotNull, Insertable(false), Updatable(false)]
        [ReadPermission(OffersPermissionKeys.Auditing)]
       // [ForeignKey(typeof(UserRow)), LeftJoin("usrI"), TextualField("InsertUserName")]
        public Int32? InsertUserId
        {
            get { return loggingFields.InsertUserId[this]; }
            set { loggingFields.InsertUserId[this] = value; }
        }
       // [Expression("usrI.DisplayName")]
        [DisplayName("Created by"), NotMapped]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        public String InsertUserName
        {
            get { return loggingFields.InsertUserName[this]; }
            set { loggingFields.InsertUserName[this] = value; }
        }


        [NotNull, Insertable(false), Updatable(false)]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        [DisplayName("Insert Date")]
        [DateTimeFormatter]
        public DateTime? InsertDate
        {
            get { return loggingFields.InsertDate[this]; }
            set { loggingFields.InsertDate[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        public Int32? UpdateUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }

        [DisplayName("Last updated by"), NotMapped]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        public String UpdateUserName
        {
            get { return loggingFields.UpdateUserName[this]; }
            set { loggingFields.UpdateUserName[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        [DisplayName("Update Date")]
        [DateTimeFormatter]
        public DateTime? UpdateDate
        {
            get { return loggingFields.UpdateDate[this]; }
            set { loggingFields.UpdateDate[this] = value; }
        }

        [BooleanEditor, BooleanFormatter]
        [LookupInclude]
        [DisplayName("Is Active")]
        [ReadPermission(OffersPermissionKeys.Auditing)]
        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return loggingFields.IsActive[this]; }
            set { loggingFields.IsActive[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return loggingFields.NoteList[this]; }
            set { loggingFields.NoteList[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return loggingFields.IsActive; }
        }

        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return loggingFields.InsertUserId; }
        }

        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return loggingFields.UpdateUserId; }
        }

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return loggingFields.InsertDate; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return loggingFields.UpdateDate; }
        }

        private OMPLoggingRowFields loggingFields;

        public class OMPLoggingRowFields : RowFieldsBase
        {
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;

            public Int16Field IsActive;
            public StringField InsertUserName;
            public StringField UpdateUserName;

            public RowListField<NoteRow> NoteList;

            public OMPLoggingRowFields(string tableName = null, string fieldPrefix = null)
                : base(tableName, fieldPrefix)
            {
            }
        }
    }
}
