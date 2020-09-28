
namespace OMP.Offers {

    import fld = OffersRow.Fields;
    @Serenity.Decorators.registerClass()
    export class OffersGrid extends Serenity.EntityGrid<OffersRow, any> {
        protected getColumnsKey() { return 'Offers.Offers'; }
        protected getDialogType() { return OffersDialog; }
        protected getIdProperty() { return OffersRow.idProperty; }
        protected getInsertPermission() { return OffersRow.insertPermission; }
        protected getLocalTextPrefix() { return OffersRow.localTextPrefix; }
        protected getService() { return OffersService.baseUrl; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {
          var flt = super.getQuickFilters();

          var q = Q.parseQueryString();
            if (q["OfferStatusId"]) {
            var category = Q.tryFirst(flt, x => x.field == "OfferStatusId");
            category.init = e => {
                e.element.getWidget(Serenity.LookupEditor).value = q["OfferStatusId"];
            };
          }
            if (q["SoftwareFrameworkId"]) {
                var category = Q.tryFirst(flt, x => x.field == "SoftwareFrameworkId");
              category.init = e => {
                  e.element.getWidget(Serenity.LookupEditor).value = q["SoftwareFrameworkId"];
              };
            }
          return flt;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: OffersService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push({
                title: Q.format(Q.tryGetText("Site.GroupingButtonFormatterOneValue"), Q.tryGetText("Db.Offers.Companies.EntitySingular")),
                cssClass: 'expand-all-button offer-group-button',
                onClick: () => this.view.setGrouping(
                    [{
                        formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
                        getter: fld.CompanyName
                  }])
              },
                {
                    title: Q.format(Q.tryGetText("Site.GroupingButtonFormatterTwoValues")
                        , Q.tryGetText("Db.Offers.Companies.EntitySingular")
                        , Q.tryGetText("Db.Offers.OfferStatuses.EntitySingular")),
                cssClass: 'expand-all-button offer-group-button',
                onClick: () => this.view.setGrouping(
                  [{
                      formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
                      getter: fld.CompanyName
                  }, {
                          formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
                          getter: fld.OfferStatusName
                  }])
                }, {
                  title: Q.tryGetText("Site.NoGroupingButton"),
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
              });
            return buttons;
        }

        protected markupReady() {
          super.markupReady();
          this.view.setGrouping(
            [{
                formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
              getter: fld.CompanyName
            }]);
          // expanding all level 0 (Country) and level 1 (City) groups initially
          this.view.expandAllGroups(null);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print PDF',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="pdf">' +
                    '<i class="fa fa-file-pdf-o text-red"></i> PDF</a>',
                width: 64,
                minWidth: 44,
                maxWidth: 64
            });

            return columns;
        }

        //protected addButtonClick() {
        //    var additionalInfo = Q.tryGetText("Site.Offers.OfferReportFooterInfoFormat");
        //    this.editItem({ AdditionalInfo: additionalInfo });
        //}

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {

                    OMP.Common.ReportHelper.execute({
                        reportKey: 'Offers.Offer',
                        //extension: "html",
                        params: {
                            OfferId: item.OfferId,
                            LanguageId: ($.cookie('LanguagePreference')) ? $.cookie('LanguagePreference'):"en"
                        },
                        
                    });
                }
            }
        }
    }
}