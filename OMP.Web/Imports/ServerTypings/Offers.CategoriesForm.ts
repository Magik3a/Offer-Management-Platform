namespace OMP.Offers {
    export interface CategoriesForm {
        Name: Serenity.StringEditor;
        FontColor: Serenity.StringEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CategoriesForm, [
                    'Name', w0,
                    'FontColor', w0
                ]);
            }
        }
    }
}
