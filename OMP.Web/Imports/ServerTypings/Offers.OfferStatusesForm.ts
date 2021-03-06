﻿namespace OMP.Offers {
    export interface OfferStatusesForm {
        Name: Serenity.StringEditor;
        BackgroundColor: ColorPickerEditor;
        BorderColor: ColorPickerEditor;
        CountForCompleted: Serenity.BooleanEditor;
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
                var w1 = ColorPickerEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(OfferStatusesForm, [
                    'Name', w0,
                    'BackgroundColor', w1,
                    'BorderColor', w1,
                    'CountForCompleted', w2
                ]);
            }
        }
    }
}
