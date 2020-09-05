
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferCategoriesGrid extends Serenity.EntityGrid<OfferCategoriesRow, any> {
        protected getColumnsKey() { return 'Offers.OfferCategories'; }
        protected getDialogType() { return OfferCategoriesDialog; }
        protected getIdProperty() { return OfferCategoriesRow.idProperty; }
        protected getInsertPermission() { return OfferCategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return OfferCategoriesRow.localTextPrefix; }
        protected getService() { return OfferCategoriesService.baseUrl; }
        protected getIsActiveProperty() { return OfferCategoriesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }


        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Price')
                ]
            });

            return grid;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
    }
}