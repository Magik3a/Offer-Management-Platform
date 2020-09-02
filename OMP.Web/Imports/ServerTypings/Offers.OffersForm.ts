namespace OMP.Offers {
    export interface OffersForm {
        Name: Serenity.StringEditor;
        Discount: Serenity.DecimalEditor;
        MinimumDaysDevelopmentTime: Serenity.IntegerEditor;
        MaximumDaysDevelopmentTime: Serenity.IntegerEditor;
        StartDate: Serenity.DateTimeEditor;
        AdditionalInfo: Serenity.TextAreaEditor;
        CompanyId: Serenity.LookupEditor;
        OfferStatusId: Serenity.LookupEditor;
    }

    export class OffersForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Offers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OffersForm.init)  {
                OffersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.LookupEditor;

                Q.initFormType(OffersForm, [
                    'Name', w0,
                    'Discount', w1,
                    'MinimumDaysDevelopmentTime', w2,
                    'MaximumDaysDevelopmentTime', w2,
                    'StartDate', w3,
                    'AdditionalInfo', w4,
                    'CompanyId', w5,
                    'OfferStatusId', w5
                ]);
            }
        }
    }
}
