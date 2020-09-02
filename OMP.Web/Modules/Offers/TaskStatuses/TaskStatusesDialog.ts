
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class TaskStatusesDialog extends Serenity.EntityDialog<TaskStatusesRow, any> {
        protected getFormKey() { return TaskStatusesForm.formKey; }
        protected getIdProperty() { return TaskStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return TaskStatusesRow.localTextPrefix; }
        protected getNameProperty() { return TaskStatusesRow.nameProperty; }
        protected getService() { return TaskStatusesService.baseUrl; }
        protected getDeletePermission() { return TaskStatusesRow.deletePermission; }
        protected getInsertPermission() { return TaskStatusesRow.insertPermission; }
        protected getUpdatePermission() { return TaskStatusesRow.updatePermission; }
        protected getIsActiveProperty() { return TaskStatusesRow.isActiveProperty; } 

        protected form = new TaskStatusesForm(this.idPrefix);

    }
}