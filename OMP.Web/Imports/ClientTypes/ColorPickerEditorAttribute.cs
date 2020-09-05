using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP
{
    public partial class ColorPickerEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "OMP.ColorPickerEditor";

        public ColorPickerEditorAttribute()
            : base(Key)
        {
        }
    }
}
