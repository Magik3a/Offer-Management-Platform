using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP.Administration
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "OMP.Administration.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
