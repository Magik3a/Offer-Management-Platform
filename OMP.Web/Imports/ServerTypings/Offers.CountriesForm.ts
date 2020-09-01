namespace OMP.Offers {
    export interface CountriesForm {
        Name: Serenity.StringEditor;
    }

    export class CountriesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Countries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountriesForm.init)  {
                CountriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CountriesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
