/// <reference path="../OffersEntityDialog.ts" />

namespace OMP.Offers {
    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class OffersDialog extends OffersEntityDialog<OffersRow, any> {
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
        private offerCategoriesGrid: OfferOfferCategoriesGrid;
        private offerOfferAttachmentsGrid: OfferOfferAttachmentsGrid;

        constructor() {
            super();

            this.offerCategoryTasksGrid = new OfferOfferCategoryTasksGrid(this.byId('OfferCategoryTasksGrid'));

            this.offerCategoriesGrid = new OfferOfferCategoriesGrid(this.byId('OfferCategoriesGrid'));

            this.offerOfferAttachmentsGrid = new OfferOfferAttachmentsGrid(this.byId('OfferAttachmentsGrid'));

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));


            this.form.MaximumDaysDevelopmentTime.addValidationRule(this.uniqueName, e => {
                var minimumDaysDevelopmentTime = this.form.MinimumDaysDevelopmentTime.value;
                var maximumDaysDevelopmentTime = this.form.MaximumDaysDevelopmentTime.value;
                if (minimumDaysDevelopmentTime != null && maximumDaysDevelopmentTime != null
                    && minimumDaysDevelopmentTime >= maximumDaysDevelopmentTime) {
                    return Q.text("Site.Offers.ValidationErrorMaximumDays");
                }
            });

            this.form.StartDate.change(e => {
                if (!this.form.StartDate.value) {
                    return;
                }

                this.setLocalization();
            });

            this.form.MinimumDaysDevelopmentTime.change(e => {
                if (!this.form.MinimumDaysDevelopmentTime.value) {
                    return;
                }
                this.setLocalization();
            });

            this.form.MaximumDaysDevelopmentTime.change(e => {
                if (!this.form.MaximumDaysDevelopmentTime.value) {
                    return;
                }
                this.setLocalization();
            });


            this.form.CompanyId.changeSelect2(e => {
                if (!this.form.CompanyId.value) {
                return;
                }
                if (this.isNew()) {
                  Offers.CompaniesService.Retrieve({ EntityId: this.form.CompanyId.value },
                    response => {
                      this.form.Name.value = "Offer for updating system" + " - " + response.Entity.Name;
                    });
                  this.setLocalization();
                }
            });
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(OMP.Common.ReportHelper.createToolButton({
                title: 'PDF',
                cssClass: 'export-pdf-button',
                reportKey: 'Offers.Offer',
                getParams: () => ({
                    OfferId: this.get_entityId(),
                    LanguageId: ($.cookie('LanguagePreference')) ? $.cookie('LanguagePreference') : "en"
                })
            }));

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();
            this.cloneButton.toggle(this.isEditMode());

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }

        loadEntity(entity: OffersRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'OfferCategoryTasks', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'OfferCategories', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'OfferAttachments', this.isNewOrDeleted());

            if (!this.isNew()) {
                this.offerCategoryTasksGrid.offerId = entity.OfferId + "";
                this.offerCategoriesGrid.offerId = entity.OfferId + "";
                this.offerOfferAttachmentsGrid.offerId = entity.OfferId + "";
                //this.form.Name.value = entity.Name;

            } else {
                
                if (this.form.CompanyId.text) {
                  Offers.CompaniesService.Retrieve({ EntityId: this.form.CompanyId.value },
                    response => {
                      this.form.Name.value = "Offer for updating system" + " - " + response.Entity.Name;
                    });

                } else {
                  this.form.Name.value = "Offer for updating system";
                }
                this.setLocalization();
            }
        }
        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            // add (Clone) suffix if it's not already added
            var suffix = ' (Clone)';
            if (!Q.endsWith(clone.Name || '', suffix)) {
                clone.Name = (clone.Name || '') + suffix;
            }

            clone.InsertUserId = null;
            clone.InsertDate = null;
            clone.UpdateDate = null;
            clone.UpdateUserId = null;
            clone.IsActive = null;
            return clone;
        }
        private setLocalization() {

            let opt = {
                service: UserOfferSettingsService.baseUrl + '/RetrieveForUser',
                blockUI: true,
                request: {
                    ColumnSelection: Serenity.ColumnSelection.KeyOnly,
                    IncludeColumns: [
                        'Localizations', 'OfferInvoiceAdditionalInfoFormatter'
                    ]
                },
                onSuccess: response => {
                    if (response.Entity) {
                        this.form.AdditionalInfo.value =
                            this.formatAdditionalInfo(response.Entity
                                .OfferInvoiceAdditionalInfoFormatter);

                        var copy = Q.extend(new Object(), this.get_entity());
                        if (response.Localizations) {
                            for (var language of Object.keys(response.Localizations)) {
                                var entity = response.Localizations[language];

                                for (var key of Object.keys(entity)) {
                                    if (key === UserOfferSettingsRow.Fields.OfferInvoiceAdditionalInfoFormatter) {

                                        if (key ===
                                            "OfferInvoiceAdditionalInfoFormatter"
                                        ) {
                                            copy[language + '$AdditionalInfo'] = this.formatAdditionalInfo(entity[key]);
                                        } else {
                                          copy[language + '$AdditionalInfo'] = entity[key];
                                        }
                                    }
                                }

                                if (OMP.Common.LanguageSelection.getCurrentLanguageDbId() + "" === language) {
                                  if (this.form.CompanyId.text) {
                                      copy[language + '$Name'] = Q.tryGetText("Site.Offers.OfferNamePrefix") + " - " + Offers.CompaniesRow.getLookup().itemById[this.form.CompanyId.value].Name;
                                  } else {
                                      copy[language + '$Name'] = Q.tryGetText("Site.Offers.OfferNamePrefix");
                                  }
                                }
                            }

                        }

                        this.localizationGrid.load(copy);
                        this.setLocalizationGridCurrentValues();
                        this.localizationPendingValue = this.getLocalizationGridValue();
                        this.localizationLastValue = this.getLocalizationGridValue();
                    }
                }
            } as Q.ServiceOptions<any>;

            Q.serviceCall(opt);
        }

        private formatAdditionalInfo(formatter: string) {

            return Q.format(formatter, this.form.MinimumDaysDevelopmentTime.value, this.form.MaximumDaysDevelopmentTime.value, this.form.StartDate.valueAsDate);
        }


        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup(OffersRow.lookupKey);
        }
    }
}