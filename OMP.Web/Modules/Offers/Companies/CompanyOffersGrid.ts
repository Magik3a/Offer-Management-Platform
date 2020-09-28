/// <reference path="../Offers/OffersGrid.ts" />

namespace OMP.Offers {

    import fld = OffersRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CompanyOffersGrid extends OffersGrid {
        protected getDialogType() { return CompanyOffersDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            let columns = super.getColumns();

            columns = columns.filter(x => x.field !== fld.CompanyName + "");
            return columns;
        }
        // Remove quick filters that are not needed here
        protected createQuickFilters() {
            super.createQuickFilters();

            this.findQuickFilter(Serenity.LookupEditor, fld.CompanyId).element.parent().remove("*");
            this.findQuickFilter(Serenity.LookupEditor, fld.CompanyCityId).element.parent().remove("*");
        }
        protected markupReady() {
            super.markupReady();
            this.view.setGrouping(
                [{
                    formatter: x => Q.format(Q.tryGetText("Site.GroupingItemsFormatter"), x.value, x.count),
                    getter: fld.SoftwareFrameworkName
                }]);
            // expanding all level 0 (Country) and level 1 (City) groups initially
            this.view.expandAllGroups(null);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }
        protected onViewProcessData(response: Serenity.ListResponse<OfferCategoriesRow>): Serenity.ListResponse<OfferCategoriesRow> {
          var listResponse = super.onViewProcessData(response);
            TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Offers');
          return listResponse;
        }
        protected addButtonClick() {
            this.editItem({ CompanyId: this.companyId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.companyId;
        }

        private _companyId: string;

        get companyId() {
            return this._companyId;
        }

        set companyId(value: string) {
            if (this._companyId !== value) {
                this._companyId = value;
                this.setEquality('CompanyId', value);
                this.refresh();
            }
        }
    }
}