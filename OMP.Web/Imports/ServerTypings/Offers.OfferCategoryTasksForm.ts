namespace OMP.Offers {
    export interface OfferCategoryTasksForm {
        Name: Serenity.StringEditor;
        DevelopmentTimeHours: Serenity.DecimalEditor;
        TaskStatusId: Serenity.LookupEditor;
        OfferCategoryOfferId: Serenity.LookupEditor;
        ParentOfferCategoryTaskId: Serenity.LookupEditor;
        OfferCategoryId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
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
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(OfferCategoryTasksForm, [
                    'Name', w0,
                    'DevelopmentTimeHours', w1,
                    'TaskStatusId', w2,
                    'OfferCategoryOfferId', w2,
                    'ParentOfferCategoryTaskId', w2,
                    'OfferCategoryId', w2,
                    'Description', w3
                ]);
            }
        }
    }
}
