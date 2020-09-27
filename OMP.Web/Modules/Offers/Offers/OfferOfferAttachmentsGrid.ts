/// <reference path="../OfferAttachments/OfferAttachmentsGrid.ts" />

namespace OMP.Offers {

    import fld = OfferAttachmentsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OfferOfferAttachmentsGrid extends OfferAttachmentsGrid {
        protected getDialogType() { return OfferOfferAttachmentsDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            let columns = super.getColumns();

            columns = columns.filter(x => x.field !== fld.OfferName + "");
            return columns;
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ OfferId: this.offerId });
        }

        protected getInitialTitle() {
            return null;
        }
        protected onViewProcessData(response: Serenity.ListResponse<OfferAttachmentsRow>): Serenity.ListResponse<OfferAttachmentsRow> {
          var listResponse = super.onViewProcessData(response);
          TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'OfferAttachments');
          return listResponse;
        }
        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.offerId;
        }
        // Remove quick filters that are not needed here
        protected createQuickFilters() {
            super.createQuickFilters();

            var lookupOfferId = this.findQuickFilter(Serenity.LookupEditor, fld.OfferId);
            lookupOfferId.element.parent().remove("*");
        }

        private _offerId: string;

        get offerId() {
            return this._offerId;
        }

        set offerId(value: string) {
            if (this._offerId !== value) {
                this._offerId = value;
                this.setEquality('OfferId', value);
                this.refresh();
            }
        }
    }
}