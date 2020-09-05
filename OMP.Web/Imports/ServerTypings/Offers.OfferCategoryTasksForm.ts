namespace OMP.Offers {
    export interface OfferCategoryTasksForm {
        Name: Serenity.StringEditor;
        DevelopmentTimeHours: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
        OfferCategoryOfferId: Serenity.LookupEditor;
        ParentOfferCategoryTaskId: Serenity.LookupEditor;
        OfferCategoryId: Serenity.LookupEditor;
        TaskStatusId: Serenity.LookupEditor;
    }

    export class OfferCategoryTasksForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.OfferCategoryTasks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OfferCategoryTasksForm.init)  {
                OfferCategoryTasksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(OfferCategoryTasksForm, [
                    'Name', w0,
                    'DevelopmentTimeHours', w1,
                    'Description', w2,
                    'OfferCategoryOfferId', w3,
                    'ParentOfferCategoryTaskId', w3,
                    'OfferCategoryId', w3,
                    'TaskStatusId', w3
                ]);
            }
        }
    }
}
