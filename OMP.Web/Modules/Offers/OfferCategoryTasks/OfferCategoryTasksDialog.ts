
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

        constructor() {
            super();

            this.form.ParentOfferCategoryTaskId.change((e) => {
                if (this.form.ParentOfferCategoryTaskId.value) {
                    this.form.OfferCategoryId.value =
                        OfferCategoryTasksRow.getLookup().itemById[this.form.ParentOfferCategoryTaskId.value]
                        .OfferCategoryId +
                        "";

                    Serenity.EditorUtils.setReadOnly(this.form.OfferCategoryId, true);
                } else {

                    Serenity.EditorUtils.setReadOnly(this.form.OfferCategoryId, false);
                }
            });
        }

        loadEntity(entity: OfferCategoryTasksRow) {
            super.loadEntity(entity);

            if (!this.isNewOrDeleted()) {
                this.form.ParentOfferCategoryTaskId.items = this.form.ParentOfferCategoryTaskId.items.filter(x => x.id !== entity.OfferCategoryTaskId.toString());
            }
        }


        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup(OfferCategoryTasksRow.lookupKey);
        }
    }
}