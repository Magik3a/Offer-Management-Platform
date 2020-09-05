
namespace OMP.Offers.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Offers.OfferCategoryTasks")]
    [BasedOnRow(typeof(Entities.OfferCategoryTasksRow), CheckNames = true)]
    public class OfferCategoryTasksForm
    {
        public String Name { get; set; }
        public Decimal DevelopmentTimeHours { get; set; }
        public String Description { get; set; }
        public Int32 OfferCategoryOfferId { get; set; }
        public Int32 ParentOfferCategoryTaskId { get; set; }
        public Int32 OfferCategoryId { get; set; }
        public Int32 TaskStatusId { get; set; }
    }
}