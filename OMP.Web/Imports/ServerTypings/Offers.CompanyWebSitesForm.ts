namespace OMP.Offers {
    export interface CompanyWebSitesForm {
        Name: Serenity.StringEditor;
        CompanyId: Serenity.LookupEditor;
    }

    export class CompanyWebSitesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.CompanyWebSites';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompanyWebSitesForm.init)  {
                CompanyWebSitesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CompanyWebSitesForm, [
                    'Name', w0,
                    'CompanyId', w1
                ]);
            }
        }
    }
}
