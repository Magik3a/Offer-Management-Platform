/// <reference path="../OfferCategoryTasks/OfferCategoryTasksGrid.ts" />

namespace OMP.Offers {

    import fld = OfferCategoryTasksRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OfferOfferCategoryTasksGrid extends OfferCategoryTasksGrid {
        protected getDialogType() { return OfferOfferCategoryTasksDialog; }

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
            this.editItem({ OfferCategoryOfferId: this.offerId });
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
                this.setEquality('OfferCategoryOfferId', value);
                this.refresh();
            }
        }
    }
}