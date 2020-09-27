namespace OMP.Offers {
    export interface SoftwareFrameworksForm {
        Name: Serenity.StringEditor;
        SpecificVersion: Serenity.StringEditor;
        BorderColor: ColorPickerEditor;
        BackgroundColor: ColorPickerEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SoftwareFrameworksForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.SoftwareFrameworks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SoftwareFrameworksForm.init)  {
                SoftwareFrameworksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = ColorPickerEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(SoftwareFrameworksForm, [
                    'Name', w0,
                    'SpecificVersion', w0,
                    'BorderColor', w1,
                    'BackgroundColor', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
