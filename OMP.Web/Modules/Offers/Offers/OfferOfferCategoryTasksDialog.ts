/// <reference path="../OfferCategoryTasks/OfferCategoryTasksDialog.ts" />

namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferOfferCategoryTasksDialog extends OfferCategoryTasksDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OfferCategoryOfferId, true);
        }
    }
}