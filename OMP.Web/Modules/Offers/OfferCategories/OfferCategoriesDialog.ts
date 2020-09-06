
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

        private localizationPropertyGrid: Serenity.PropertyGrid;


        constructor() {
            super();

            this.form.CategoryId.change((e) => {
                if (this.form.CategoryId.value) {

                    var opt = <Q.ServiceOptions<any>>{
                        service: CategoriesService.baseUrl + '/Retrieve',
                        blockUI: true,
                        request: {
                            EntityId: this.form.CategoryId.value,
                            ColumnSelection: 'keyOnly',
                            IncludeColumns: ['Localizations', 'Name', 'FontColor']
                        },
                        onSuccess: response => {
                            if (this.isNewOrDeleted()) {
                                this.form.CategoryNameReport.value = response.Entity.Name;
                                this.form.CategoryFontColorReport.value = response.Entity.FontColor;
                            }
                            var copy = Q.extend(new Object(), this.get_entity());
                            if (response.Localizations) {
                                for (var language of Object.keys(response.Localizations)) {
                                    var entity = response.Localizations[language];
                                    for (var key of Object.keys(entity)) {
                                        copy[language + '$CategoryNameReport'] = entity[key];
                                    }
                                }
                            }

                            this.localizationGrid.load(copy);
                            this.setLocalizationGridCurrentValues();
                            this.localizationPendingValue = this.getLocalizationGridValue();
                            this.localizationLastValue = this.getLocalizationGridValue();
                            
                        }
                    };

                    Q.serviceCall(opt);
                }
            });
        }


        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup(OfferCategoriesRow.lookupKey);
        }
    }
}