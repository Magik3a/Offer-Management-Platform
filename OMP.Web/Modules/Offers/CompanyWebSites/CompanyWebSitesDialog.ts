
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompanyWebSitesDialog extends Serenity.EntityDialog<CompanyWebSitesRow, any> {
        protected getFormKey() { return CompanyWebSitesForm.formKey; }
        protected getIdProperty() { return CompanyWebSitesRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyWebSitesRow.localTextPrefix; }
        protected getNameProperty() { return CompanyWebSitesRow.nameProperty; }
        protected getService() { return CompanyWebSitesService.baseUrl; }
        protected getDeletePermission() { return CompanyWebSitesRow.deletePermission; }
        protected getInsertPermission() { return CompanyWebSitesRow.insertPermission; }
        protected getUpdatePermission() { return CompanyWebSitesRow.updatePermission; }
        protected getIsActiveProperty() { return CompanyWebSitesRow.isActiveProperty; }

        protected form = new CompanyWebSitesForm(this.idPrefix);

    }
}