namespace OMP.Offers {
    export interface TaskStatusesForm {
        Name: Serenity.StringEditor;
        BackgroundColor: ColorPickerEditor;
        BorderColor: ColorPickerEditor;
    }

    export class TaskStatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.TaskStatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TaskStatusesForm.init)  {
                TaskStatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = ColorPickerEditor;

                Q.initFormType(TaskStatusesForm, [
                    'Name', w0,
                    'BackgroundColor', w1,
                    'BorderColor', w1
                ]);
            }
        }
    }
}
