
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferCategoryTasksDialog extends Serenity.EntityDialog<OfferCategoryTasksRow, any> {
        protected getFormKey() { return OfferCategoryTasksForm.formKey; }
        protected getIdProperty() { return OfferCategoryTasksRow.idProperty; }
        protected getLocalTextPrefix() { return OfferCategoryTasksRow.localTextPrefix; }
        protected getNameProperty() { return OfferCategoryTasksRow.nameProperty; }
        protected getService() { return OfferCategoryTasksService.baseUrl; }
        protected getDeletePermission() { return OfferCategoryTasksRow.deletePermission; }
        protected getInsertPermission() { return OfferCategoryTasksRow.insertPermission; }
        protected getUpdatePermission() { return OfferCategoryTasksRow.updatePermission; }
        protected getIsActiveProperty() { return OfferCategoryTasksRow.isActiveProperty; }

        protected form = new OfferCategoryTasksForm(this.idPrefix);

    }
}