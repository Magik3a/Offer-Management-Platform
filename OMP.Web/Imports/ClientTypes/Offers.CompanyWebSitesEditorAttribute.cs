using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace OMP.Offers
{
    public partial class CompanyWebSitesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "OMP.Offers.CompanyWebSitesEditor";

        public CompanyWebSitesEditorAttribute()
            : base(Key)
        {
        }
    }
}
