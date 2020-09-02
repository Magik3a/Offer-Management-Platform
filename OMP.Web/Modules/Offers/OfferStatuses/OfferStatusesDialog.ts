
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferStatusesDialog extends Serenity.EntityDialog<OfferStatusesRow, any> {
        protected getFormKey() { return OfferStatusesForm.formKey; }
        protected getIdProperty() { return OfferStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return OfferStatusesRow.localTextPrefix; }
        protected getNameProperty() { return OfferStatusesRow.nameProperty; }
        protected getService() { return OfferStatusesService.baseUrl; }
        protected getDeletePermission() { return OfferStatusesRow.deletePermission; }
        protected getInsertPermission() { return OfferStatusesRow.insertPermission; }
        protected getUpdatePermission() { return OfferStatusesRow.updatePermission; }
        protected getIsActiveProperty() { return OfferStatusesRow.isActiveProperty; }

        protected form = new OfferStatusesForm(this.idPrefix);

    }
}