using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Extensibility;

namespace OMP.Web.Modules.Offers
{
    [NestedPermissionKeys]
    [DisplayName("Offers")]
    public class OffersPermissionKeys
    {
        [Description("[Auditing] InsertUser/UpdateUser and Dates in grids")]
        public const string Auditing = "ProtocolsManagement:Auditing";
    }
}
