namespace OMP.Offers {
    export interface OfferCategoriesForm {
        OfferId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        CategoryNameReport: Serenity.StringEditor;
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
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = ColorPickerEditor;

                Q.initFormType(OfferCategoriesForm, [
                    'OfferId', w0,
                    'CategoryId', w0,
                    'Price', w1,
                    'CategoryNameReport', w2,
                    'CategoryFontColorReport', w3
                ]);
            }
        }
    }
}
