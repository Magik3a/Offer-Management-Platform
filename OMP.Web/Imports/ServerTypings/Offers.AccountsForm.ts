namespace OMP.Offers {
    export interface AccountsForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
    }

    export class AccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Accounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountsForm.init)  {
                AccountsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(AccountsForm, [
                    'Name', w0,
                    'Address', w0,
                    'Phone', w0,
                    'CityId', w1
                ]);
            }
        }
    }
}
