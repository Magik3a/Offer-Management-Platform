/// <reference path="../Offers/OffersDialog.ts" />

namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompanyOffersDialog extends OffersDialog {

        constructor() {
            super();

        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CompanyId, true);
        }
    }
}