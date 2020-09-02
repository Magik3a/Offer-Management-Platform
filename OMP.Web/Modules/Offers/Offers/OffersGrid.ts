
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OffersGrid extends Serenity.EntityGrid<OffersRow, any> {
        protected getColumnsKey() { return 'Offers.Offers'; }
        protected getDialogType() { return OffersDialog; }
        protected getIdProperty() { return OffersRow.idProperty; }
        protected getInsertPermission() { return OffersRow.insertPermission; }
        protected getLocalTextPrefix() { return OffersRow.localTextPrefix; }
        protected getService() { return OffersService.baseUrl; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}