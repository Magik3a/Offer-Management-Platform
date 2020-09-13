namespace OMP.Offers {
    export interface OfferCategoriesForm {
        OfferId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        CategoryNameReport: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Order: Serenity.IntegerEditor;
        CategoryFontColorReport: ColorPickerEditor;
    }

    export class OfferCategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Offers.OfferCategories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OfferCategoriesForm.init)  {
                OfferCategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = ColorPickerEditor;

                Q.initFormType(OfferCategoriesForm, [
                    'OfferId', w0,
                    'CategoryId', w0,
                    'CategoryNameReport', w1,
                    'Price', w2,
                    'Order', w3,
                    'CategoryFontColorReport', w4
                ]);
            }
        }
    }
}
