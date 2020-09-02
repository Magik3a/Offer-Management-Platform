
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OffersDialog extends Serenity.EntityDialog<OffersRow, any> {
        protected getFormKey() { return OffersForm.formKey; }
        protected getIdProperty() { return OffersRow.idProperty; }
        protected getLocalTextPrefix() { return OffersRow.localTextPrefix; }
        protected getNameProperty() { return OffersRow.nameProperty; }
        protected getService() { return OffersService.baseUrl; }
        protected getDeletePermission() { return OffersRow.deletePermission; }
        protected getInsertPermission() { return OffersRow.insertPermission; }
        protected getUpdatePermission() { return OffersRow.updatePermission; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        protected form = new OffersForm(this.idPrefix);

    }
}