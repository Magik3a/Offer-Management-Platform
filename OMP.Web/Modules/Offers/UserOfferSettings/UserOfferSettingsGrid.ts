
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class UserOfferSettingsGrid extends Serenity.EntityGrid<UserOfferSettingsRow, any> {
        protected getColumnsKey() { return 'Offers.UserOfferSettings'; }
        protected getDialogType() { return UserOfferSettingsDialog; }
        protected getIdProperty() { return UserOfferSettingsRow.idProperty; }
        protected getInsertPermission() { return UserOfferSettingsRow.insertPermission; }
        protected getLocalTextPrefix() { return UserOfferSettingsRow.localTextPrefix; }
        protected getService() { return UserOfferSettingsService.baseUrl; }
        protected getIsActiveProperty() { return UserOfferSettingsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}