namespace OMP.Offers {
    export interface OfferAttachmentsForm {
        OfferId: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        Description: Serenity.HtmlContentEditor;
    }

    export class OfferAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.OfferAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OfferAttachmentsForm.init)  {
                OfferAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.HtmlContentEditor;

                Q.initFormType(OfferAttachmentsForm, [
                    'OfferId', w0,
                    'Name', w1,
                    'FilePath', w2,
                    'Description', w3
                ]);
            }
        }
    }
}
