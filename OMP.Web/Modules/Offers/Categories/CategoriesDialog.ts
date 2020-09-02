
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey() { return CategoriesForm.formKey; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesRow.nameProperty; }
        protected getService() { return CategoriesService.baseUrl; }
        protected getDeletePermission() { return CategoriesRow.deletePermission; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getUpdatePermission() { return CategoriesRow.updatePermission; }
        protected getIsActiveProperty() { return CategoriesRow.isActiveProperty; }

        protected form = new CategoriesForm(this.idPrefix);

    }
}