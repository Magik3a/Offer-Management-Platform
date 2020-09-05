namespace OMP.Offers {
    export interface OffersForm {
        Name: Serenity.StringEditor;
        OfferStatusId: Serenity.LookupEditor;
        Discount: Serenity.DecimalEditor;
        MinimumDaysDevelopmentTime: Serenity.IntegerEditor;
        MaximumDaysDevelopmentTime: Serenity.IntegerEditor;
        CompanyId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        AdditionalInfo: Serenity.TextAreaEditor;
        NoteList: Serenity.StringEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateTimeEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(OffersForm, [
                    'Name', w0,
                    'OfferStatusId', w1,
                    'Discount', w2,
                    'MinimumDaysDevelopmentTime', w3,
                    'MaximumDaysDevelopmentTime', w3,
                    'CompanyId', w1,
                    'StartDate', w4,
                    'AdditionalInfo', w5,
                    'NoteList', w0
                ]);
            }
        }
    }
}
