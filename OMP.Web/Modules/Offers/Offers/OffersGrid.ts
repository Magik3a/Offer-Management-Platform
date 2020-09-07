
namespace OMP.Offers {

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

            return buttons;
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