
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferStatusesGrid extends Serenity.EntityGrid<OfferStatusesRow, any> {
        protected getColumnsKey() { return 'Offers.OfferStatuses'; }
        protected getDialogType() { return OfferStatusesDialog; }
        protected getIdProperty() { return OfferStatusesRow.idProperty; }
        protected getInsertPermission() { return OfferStatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return OfferStatusesRow.localTextPrefix; }
        protected getService() { return OfferStatusesService.baseUrl; }
        protected getIsActiveProperty() { return OfferStatusesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}