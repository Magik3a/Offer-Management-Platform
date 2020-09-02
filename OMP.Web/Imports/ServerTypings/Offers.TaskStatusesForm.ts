namespace OMP.Offers {
    export interface TaskStatusesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
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

                Q.initFormType(TaskStatusesForm, [
                    'Name', w0,
                    'BorderColor', w0,
                    'BackgroundColor', w0
                ]);
            }
        }
    }
}
