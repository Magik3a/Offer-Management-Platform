using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OMP.Offers
{
    public class CompaniesListRequest : ListRequest
    {
        public Int32? CompanyWebSiteId { get; set; }
    }
}
