
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey() { return 'Offers.Categories'; }
        protected getDialogType() { return CategoriesDialog; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getService() { return CategoriesService.baseUrl; }
        protected getIsActiveProperty() { return CategoriesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}