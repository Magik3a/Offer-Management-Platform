using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OMP.Administration.Logging
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    public abstract class OMPLoggingRowColumns
    {
        [Width(150)]
        public DateTime InsertDate { get; set; }
        [Width(200)]
        public Int32 InsertUserName { get; set; }
        [Width(150)]
        public DateTime UpdateDate { get; set; }
        [Width(200)]
        public Int32 UpdateUserName { get; set; }
        //[Width(70)]
        //public Int16 IsActive { get; set; }
    }
}
