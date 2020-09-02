
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey() { return 'Offers.Accounts'; }
        protected getDialogType() { return AccountsDialog; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getInsertPermission() { return AccountsRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getService() { return AccountsService.baseUrl; }
        protected getIsActiveProperty() { return AccountsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}