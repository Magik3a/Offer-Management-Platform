
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.TaskStatuses")]
    [BasedOnRow(typeof(Entities.TaskStatusesRow), CheckNames = true)]
    public class TaskStatusesForm
    {
        public String Name { get; set; }
        public String BorderColor { get; set; }
        public String BackgroundColor { get; set; }
    }
}