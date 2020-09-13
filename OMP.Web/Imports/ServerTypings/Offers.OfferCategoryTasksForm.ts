namespace OMP.Offers {
    export interface OfferCategoryTasksForm {
        Name: Serenity.StringEditor;
        TaskStatusId: Serenity.LookupEditor;
        OfferCategoryOfferId: Serenity.LookupEditor;
        DevelopmentTimeHours: Serenity.DecimalEditor;
        Order: Serenity.IntegerEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(OfferCategoryTasksForm, [
                    'Name', w0,
                    'TaskStatusId', w1,
                    'OfferCategoryOfferId', w1,
                    'DevelopmentTimeHours', w2,
                    'Order', w3,
                    'ParentOfferCategoryTaskId', w1,
                    'OfferCategoryId', w1,
                    'Description', w4
                ]);
            }
        }
    }
}
