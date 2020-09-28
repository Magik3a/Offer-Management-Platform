
namespace OMP.Offers {


    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey() { return CompaniesForm.formKey; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getNameProperty() { return CompaniesRow.nameProperty; }
        protected getService() { return CompaniesService.baseUrl; }
        protected getDeletePermission() { return CompaniesRow.deletePermission; }
        protected getInsertPermission() { return CompaniesRow.insertPermission; }
        protected getUpdatePermission() { return CompaniesRow.updatePermission; }
        protected getIsActiveProperty() { return CompaniesRow.isActiveProperty; }

        protected form = new CompaniesForm(this.idPrefix);

        private offersGrid: CompanyOffersGrid;

        constructor() {
            super();


            this.offersGrid = new CompanyOffersGrid(this.byId('OffersGrid'));
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
        }


        loadEntity(entity: OffersRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Offers', this.isNewOrDeleted());

            if (!this.isNew()) {
                this.offersGrid.companyId = entity.CompanyId + "";


            } 
        }
    }
}