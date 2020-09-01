namespace OMP.Offers {
    export interface CitiesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }

    export class CitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Cities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesForm.init)  {
                CitiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CitiesForm, [
                    'Name', w0,
                    'CountryId', w1
                ]);
            }
        }
    }
}
