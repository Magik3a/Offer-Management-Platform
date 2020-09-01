
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey() { return CountriesForm.formKey; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getNameProperty() { return CountriesRow.nameProperty; }
        protected getService() { return CountriesService.baseUrl; }
        protected getDeletePermission() { return CountriesRow.deletePermission; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getUpdatePermission() { return CountriesRow.updatePermission; }
        protected getIsActiveProperty() { return CountriesRow.isActiveProperty; }

        protected form = new CountriesForm(this.idPrefix);

    }
}