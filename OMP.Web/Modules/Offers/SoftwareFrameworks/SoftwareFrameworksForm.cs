
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.SoftwareFrameworks")]
    [BasedOnRow(typeof(Entities.SoftwareFrameworksRow), CheckNames = true)]
    public class SoftwareFrameworksForm
    {
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public String SpecificVersion { get; set; }
        [HalfWidth]
        public String BorderColor { get; set; }
        [HalfWidth]
        public String BackgroundColor { get; set; }
        public String Description { get; set; }
    }
}