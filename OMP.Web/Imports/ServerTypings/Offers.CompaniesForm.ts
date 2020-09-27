namespace OMP.Offers {
    export interface CompaniesForm {
        Name: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
        PrimaryAccountId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        AdditionalInfo: Serenity.TextAreaEditor;
        CompanyWebSites: CompanyWebSitesEditor;
    }

    export class CompaniesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Companies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompaniesForm.init)  {
                CompaniesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = CompanyWebSitesEditor;

                Q.initFormType(CompaniesForm, [
                    'Name', w0,
                    'CityId', w1,
                    'PrimaryAccountId', w1,
                    'Address', w0,
                    'Phone', w0,
                    'AdditionalInfo', w2,
                    'CompanyWebSites', w3
                ]);
            }
        }
    }
}
