
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class TaskStatusesGrid extends Serenity.EntityGrid<TaskStatusesRow, any> {
        protected getColumnsKey() { return 'Offers.TaskStatuses'; }
        protected getDialogType() { return TaskStatusesDialog; }
        protected getIdProperty() { return TaskStatusesRow.idProperty; }
        protected getInsertPermission() { return TaskStatusesRow.insertPermission; }
        protected getLocalTextPrefix() { return TaskStatusesRow.localTextPrefix; }
        protected getService() { return TaskStatusesService.baseUrl; }
        protected getIsActiveProperty() { return TaskStatusesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}