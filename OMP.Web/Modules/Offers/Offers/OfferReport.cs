using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OMP.Web.Modules.Offers;

namespace OMP.Offers.Offers
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Offers.Offer")]
    [ReportDesign(MVC.Views.Offers.Offers_.OfferReport)]
    [RequiredPermission(OffersPermissionKeys.Auditing)]
    public class OfferReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OfferId { get; set; }

        public object GetData()
        {
            var data = new OfferReportData();

            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var o = OffersRow.Fields;

                data.Offer = connection.TryById<OffersRow>(this.OfferId, q => q
                                 .SelectTableFields()
                                 //.Select(o.EmployeeFullName)
                                 //.Select(o.ShipViaCompanyName)
                             ) ?? new OffersRow();

                //var od = OrderDetailRow.Fields;
                //data.Details = connection.List<OrderDetailRow>(q => q
                //    .SelectTableFields()
                //    .Select(od.ProductName)
                //    .Select(od.LineTotal)
                //    .Where(od.OrderID == this.OrderID));

                //var c = CustomerRow.Fields;
                //data.Customer = connection.TryFirst<CustomerRow>(c.CustomerID == data.Order.CustomerID)
                //                ?? new CustomerRow();
            }

            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }


    public class OfferReportData
    {
        public OffersRow Offer { get; set; }
    }
}
