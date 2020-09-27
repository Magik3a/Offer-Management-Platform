
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompanyWebSitesGrid extends Serenity.EntityGrid<CompanyWebSitesRow, any> {
        protected getColumnsKey() { return 'Offers.CompanyWebSites'; }
        protected getDialogType() { return CompanyWebSitesDialog; }
        protected getIdProperty() { return CompanyWebSitesRow.idProperty; }
        protected getInsertPermission() { return CompanyWebSitesRow.insertPermission; }
        protected getLocalTextPrefix() { return CompanyWebSitesRow.localTextPrefix; }
        protected getService() { return CompanyWebSitesService.baseUrl; }
        protected getIsActiveProperty() { return CompanyWebSitesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}