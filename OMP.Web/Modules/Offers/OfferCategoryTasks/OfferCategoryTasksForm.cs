
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
        [Category("Required")]

        public String Name { get; set; }
        public Int32 TaskStatusId { get; set; }
        public Int32 OfferCategoryOfferId { get; set; }

        [HalfWidth]
        public Decimal DevelopmentTimeHours { get; set; }
        [HalfWidth]
        public Int32 Order { get; set; }


        [Category("Extra info")]
        public Int32 ParentOfferCategoryTaskId { get; set; }
        public Int32 OfferCategoryId { get; set; }
        public String Description { get; set; }
    }
}