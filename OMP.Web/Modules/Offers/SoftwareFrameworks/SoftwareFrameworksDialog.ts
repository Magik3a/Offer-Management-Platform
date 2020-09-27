
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class SoftwareFrameworksDialog extends Serenity.EntityDialog<SoftwareFrameworksRow, any> {
        protected getFormKey() { return SoftwareFrameworksForm.formKey; }
        protected getIdProperty() { return SoftwareFrameworksRow.idProperty; }
        protected getLocalTextPrefix() { return SoftwareFrameworksRow.localTextPrefix; }
        protected getNameProperty() { return SoftwareFrameworksRow.nameProperty; }
        protected getService() { return SoftwareFrameworksService.baseUrl; }
        protected getDeletePermission() { return SoftwareFrameworksRow.deletePermission; }
        protected getInsertPermission() { return SoftwareFrameworksRow.insertPermission; }
        protected getUpdatePermission() { return SoftwareFrameworksRow.updatePermission; }
        protected getIsActiveProperty() { return SoftwareFrameworksRow.isActiveProperty; }

        protected form = new SoftwareFrameworksForm(this.idPrefix);

    }
}