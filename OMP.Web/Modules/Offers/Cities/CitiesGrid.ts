
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey() { return 'Offers.Cities'; }
        protected getDialogType() { return CitiesDialog; }
        protected getIdProperty() { return CitiesRow.idProperty; }
        protected getInsertPermission() { return CitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return CitiesRow.localTextPrefix; }
        protected getService() { return CitiesService.baseUrl; }
        protected getIsActiveProperty() { return CitiesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}