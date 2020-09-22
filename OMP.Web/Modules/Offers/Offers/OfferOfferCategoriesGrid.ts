/// <reference path="../OfferCategories/OfferCategoriesGrid.ts" />

namespace OMP.Offers {

    import fld = OfferCategoriesRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OfferOfferCategoriesGrid extends OfferCategoriesGrid {
        protected getDialogType() { return OfferOfferCategoriesDialog; }

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
        protected onViewProcessData(response: Serenity.ListResponse<OfferCategoriesRow>): Serenity.ListResponse<OfferCategoriesRow> {
          var listResponse = super.onViewProcessData(response);
            TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'OfferCategories');
          return listResponse;
        }
        protected addButtonClick() {
            this.editItem({ OfferId: this.offerId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.offerId;
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