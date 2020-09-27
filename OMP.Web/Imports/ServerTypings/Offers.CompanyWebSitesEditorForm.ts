namespace OMP.Offers {
    export interface CompanyWebSitesEditorForm {
        Name: Serenity.StringEditor;
    }

    export class CompanyWebSitesEditorForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.CompanyWebSitesEditor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompanyWebSitesEditorForm.init)  {
                CompanyWebSitesEditorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CompanyWebSitesEditorForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
