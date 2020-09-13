
namespace OMP.Offers {

    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class OfferAttachmentsDialog extends Serenity.EntityDialog<OfferAttachmentsRow, any> {
        protected getFormKey() { return OfferAttachmentsForm.formKey; }
        protected getIdProperty() { return OfferAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return OfferAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return OfferAttachmentsRow.nameProperty; }
        protected getService() { return OfferAttachmentsService.baseUrl; }
        protected getDeletePermission() { return OfferAttachmentsRow.deletePermission; }
        protected getInsertPermission() { return OfferAttachmentsRow.insertPermission; }
        protected getUpdatePermission() { return OfferAttachmentsRow.updatePermission; }
        protected getIsActiveProperty() { return OfferAttachmentsRow.isActiveProperty; }

        protected form = new OfferAttachmentsForm(this.idPrefix);


        loadEntity(entity: OffersRow) {
          super.loadEntity(entity);

            if (this.isNew()) {
                this.form.Name.value =
                    Q.tryGetText("Db.Offers.OfferAttachments.EntitySingular") + Q.formatDate(new Date(), " - dd.MM.yyyy" ) ;
            }
        }
    }
}