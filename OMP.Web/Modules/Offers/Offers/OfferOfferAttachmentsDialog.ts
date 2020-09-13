/// <reference path="../OfferAttachments/OfferAttachmentsDialog.ts" />

namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferOfferAttachmentsDialog extends OfferAttachmentsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OfferId, true);
        }
    }
}