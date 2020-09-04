
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferCategoryTasksGrid extends Serenity.EntityGrid<OfferCategoryTasksRow, any> {
        protected getColumnsKey() { return 'Offers.OfferCategoryTasks'; }
        protected getDialogType() { return OfferCategoryTasksDialog; }
        protected getIdProperty() { return OfferCategoryTasksRow.idProperty; }
        protected getInsertPermission() { return OfferCategoryTasksRow.insertPermission; }
        protected getLocalTextPrefix() { return OfferCategoryTasksRow.localTextPrefix; }
        protected getService() { return OfferCategoryTasksService.baseUrl; }
        protected getIsActiveProperty() { return OfferCategoryTasksRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}