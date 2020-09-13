using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP.Offers
{
    public partial class MultipleFileDownloadFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "OMP.Offers.MultipleFileDownloadFormatter";

        public MultipleFileDownloadFormatterAttribute()
            : base(Key)
        {
        }

        public Boolean ShowFileNames
        {
            get { return GetOption<Boolean>("showFileNames"); }
            set { SetOption("showFileNames", value); }
        }
    }
}
