
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return 'Offers.Countries'; }
        protected getDialogType() { return CountriesDialog; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }
        protected getIsActiveProperty() { return CountriesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
       
    }
}