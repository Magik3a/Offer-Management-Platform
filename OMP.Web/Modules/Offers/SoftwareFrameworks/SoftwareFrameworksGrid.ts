
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class SoftwareFrameworksGrid extends Serenity.EntityGrid<SoftwareFrameworksRow, any> {
        protected getColumnsKey() { return 'Offers.SoftwareFrameworks'; }
        protected getDialogType() { return SoftwareFrameworksDialog; }
        protected getIdProperty() { return SoftwareFrameworksRow.idProperty; }
        protected getInsertPermission() { return SoftwareFrameworksRow.insertPermission; }
        protected getLocalTextPrefix() { return SoftwareFrameworksRow.localTextPrefix; }
        protected getService() { return SoftwareFrameworksService.baseUrl; }
        protected getIsActiveProperty() { return SoftwareFrameworksRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}