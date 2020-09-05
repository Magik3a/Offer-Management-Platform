
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OffersDialog extends Serenity.EntityDialog<OffersRow, any> {
        protected getFormKey() { return OffersForm.formKey; }
        protected getIdProperty() { return OffersRow.idProperty; }
        protected getLocalTextPrefix() { return OffersRow.localTextPrefix; }
        protected getNameProperty() { return OffersRow.nameProperty; }
        protected getService() { return OffersService.baseUrl; }
        protected getDeletePermission() { return OffersRow.deletePermission; }
        protected getInsertPermission() { return OffersRow.insertPermission; }
        protected getUpdatePermission() { return OffersRow.updatePermission; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        protected form = new OffersForm(this.idPrefix);
        private offerCategoryTasksGrid: OfferOfferCategoryTasksGrid;

        constructor() {
            super();

            this.offerCategoryTasksGrid = new OfferOfferCategoryTasksGrid(this.byId('OfferCategoryTasksGrid'));

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
        }

        loadEntity(entity: OffersRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'OfferCategoryTasks', this.isNewOrDeleted());
            if (this.isEditMode())
            this.offerCategoryTasksGrid.offerId = entity.OfferId + "";
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup(OffersRow.lookupKey);
        }
    }
}