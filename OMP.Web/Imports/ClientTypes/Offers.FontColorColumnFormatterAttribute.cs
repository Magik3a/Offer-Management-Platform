using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP.Offers
{
    public partial class FontColorColumnFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "OMP.Offers.FontColorColumnFormatter";

        public FontColorColumnFormatterAttribute()
            : base(Key)
        {
        }

        public String FontColorProperty
        {
            get { return GetOption<String>("fontColorProperty"); }
            set { SetOption("fontColorProperty", value); }
        }
    }
}
