/// <reference path="../OfferCategoryTasks/OfferCategoryTasksGrid.ts" />

namespace OMP.Offers {

    import fld = OfferCategoryTasksRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OfferOfferCategoryTasksGrid extends OfferCategoryTasksGrid {
        protected getDialogType() { return OfferOfferCategoryTasksDialog; }

        constructor(container: JQuery) {
            super(container);
        }
        protected markupReady() {
          super.markupReady();
          this.view.setGrouping([{
              formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
            getter: fld.OfferCategoryCategoryNameReport
          }]);
          // expanding all level 0 (Country) and level 1 (City) groups initially
          this.view.expandAllGroups(null);
        }
        protected getColumns(): Slick.Column[] {
            let columns = super.getColumns();

            columns = columns.filter(x => x.field !== fld.OfferName + "");
            return columns;
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons = buttons.filter(b => b.cssClass.indexOf("offer-group-button") === -1);



            buttons.push({
                title: Q.format(Q.tryGetText("Site.GroupingButtonFormatterOneValue"), Q.tryGetText("Db.Offers.OfferCategories.EntitySingular")),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
                        getter: fld.OfferCategoryCategoryNameReport
                  }])
            }, buttons.pop());

            return buttons;
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }
        protected onViewProcessData(response: Serenity.ListResponse<OfferCategoryTasksRow>): Serenity.ListResponse<OfferCategoryTasksRow> {
          var listResponse = super.onViewProcessData(response);
            TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'OfferCategoryTasks');
          return listResponse;
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