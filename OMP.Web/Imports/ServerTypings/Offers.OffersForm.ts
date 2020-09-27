namespace OMP.Offers {
    export interface OffersForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        Discount: Serenity.DecimalEditor;
        MinimumDaysDevelopmentTime: Serenity.IntegerEditor;
        MaximumDaysDevelopmentTime: Serenity.IntegerEditor;
        CompanyId: Serenity.LookupEditor;
        OfferStatusId: Serenity.LookupEditor;
        SoftwareFrameworkId: Serenity.LookupEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.LookupEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(OffersForm, [
                    'Name', w0,
                    'StartDate', w1,
                    'Discount', w2,
                    'MinimumDaysDevelopmentTime', w3,
                    'MaximumDaysDevelopmentTime', w3,
                    'CompanyId', w4,
                    'OfferStatusId', w4,
                    'SoftwareFrameworkId', w4,
                    'AdditionalInfo', w5,
                    'NoteList', w0
                ]);
            }
        }
    }
}
