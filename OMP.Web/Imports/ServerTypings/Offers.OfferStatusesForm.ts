namespace OMP.Offers {
    export interface OfferStatusesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
    }

    export class OfferStatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.OfferStatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OfferStatusesForm.init)  {
                OfferStatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OfferStatusesForm, [
                    'Name', w0,
                    'BorderColor', w0,
                    'BackgroundColor', w0
                ]);
            }
        }
    }
}
