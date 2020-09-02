
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey() { return 'Offers.Companies'; }
        protected getDialogType() { return CompaniesDialog; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getInsertPermission() { return CompaniesRow.insertPermission; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getService() { return CompaniesService.baseUrl; }
        protected getIsActiveProperty() { return CompaniesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}