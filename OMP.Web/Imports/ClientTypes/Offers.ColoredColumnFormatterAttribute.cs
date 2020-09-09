using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP.Offers
{
    public partial class ColoredColumnFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "OMP.Offers.ColoredColumnFormatter";

        public ColoredColumnFormatterAttribute()
            : base(Key)
        {
        }

        public String BackgroundProperty
        {
            get { return GetOption<String>("backgroundProperty"); }
            set { SetOption("backgroundProperty", value); }
        }

        public String BorderProperty
        {
            get { return GetOption<String>("borderProperty"); }
            set { SetOption("borderProperty", value); }
        }

        public Boolean HideText
        {
            get { return GetOption<Boolean>("hideText"); }
            set { SetOption("hideText", value); }
        }
    }
}
