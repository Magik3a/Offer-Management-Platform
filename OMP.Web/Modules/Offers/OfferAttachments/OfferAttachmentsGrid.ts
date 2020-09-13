
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferAttachmentsGrid extends Serenity.EntityGrid<OfferAttachmentsRow, any> {
        protected getColumnsKey() { return 'Offers.OfferAttachments'; }
        protected getDialogType() { return OfferAttachmentsDialog; }
        protected getIdProperty() { return OfferAttachmentsRow.idProperty; }
        protected getInsertPermission() { return OfferAttachmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return OfferAttachmentsRow.localTextPrefix; }
        protected getService() { return OfferAttachmentsService.baseUrl; }
        protected getIsActiveProperty() { return OfferAttachmentsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}