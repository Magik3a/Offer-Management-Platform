namespace OMP.Offers {
    export interface UserOfferSettingsForm {
        OfferInvoiceAdditionalInfoFormatter: Serenity.TextAreaEditor;
        OfferInvoiceFooterText: Serenity.TextAreaEditor;
        OfferInvoiceFooterImage: Serenity.ImageUploadEditor;
        UserId: Serenity.LookupEditor;
    }

    export class UserOfferSettingsForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.UserOfferSettings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserOfferSettingsForm.init)  {
                UserOfferSettingsForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(UserOfferSettingsForm, [
                    'OfferInvoiceAdditionalInfoFormatter', w0,
                    'OfferInvoiceFooterText', w0,
                    'OfferInvoiceFooterImage', w1,
                    'UserId', w2
                ]);
            }
        }
    }
}
