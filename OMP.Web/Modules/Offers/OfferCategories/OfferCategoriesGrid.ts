
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
    }
}