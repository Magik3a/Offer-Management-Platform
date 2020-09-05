
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferCategoriesDialog extends Serenity.EntityDialog<OfferCategoriesRow, any> {
        protected getFormKey() { return OfferCategoriesForm.formKey; }
        protected getIdProperty() { return OfferCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return OfferCategoriesRow.localTextPrefix; }
        protected getNameProperty() { return OfferCategoriesRow.nameProperty; }
        protected getService() { return OfferCategoriesService.baseUrl; }
        protected getDeletePermission() { return OfferCategoriesRow.deletePermission; }
        protected getInsertPermission() { return OfferCategoriesRow.insertPermission; }
        protected getUpdatePermission() { return OfferCategoriesRow.updatePermission; }
        protected getIsActiveProperty() { return OfferCategoriesRow.isActiveProperty; }

        protected form = new OfferCategoriesForm(this.idPrefix);
        constructor() {
            super();

            this.form.CategoryId.change((e) => {
                if (this.form.CategoryId.value)
                    this.form.CategoryNameReport.value = CategoriesRow.getLookup().itemById[this.form.CategoryId.value].Name.trim();
            });
        }

    }
}