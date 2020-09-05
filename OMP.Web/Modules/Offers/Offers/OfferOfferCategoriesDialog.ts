/// <reference path="../OfferCategories/OfferCategoriesDialog.ts" />

namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferOfferCategoriesDialog extends OfferCategoriesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OfferId, true);
        }
    }
}