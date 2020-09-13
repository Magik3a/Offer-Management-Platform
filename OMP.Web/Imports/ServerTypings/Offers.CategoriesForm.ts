namespace OMP.Offers {
    export interface CategoriesForm {
        Name: Serenity.StringEditor;
        FontColor: ColorPickerEditor;
        DefaultOrder: Serenity.IntegerEditor;
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
                var w1 = ColorPickerEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CategoriesForm, [
                    'Name', w0,
                    'FontColor', w1,
                    'DefaultOrder', w2
                ]);
            }
        }
    }
}
