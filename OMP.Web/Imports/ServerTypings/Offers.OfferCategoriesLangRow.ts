namespace OMP.Offers {
    export interface OfferCategoriesLangRow {
        Id?: number;
        OfferCategoryId?: number;
        LanguageId?: number;
        CategoryNameReport?: string;
        OfferCategoryOfferId?: number;
        OfferCategoryCategoryId?: number;
        OfferCategoryPrice?: number;
        OfferCategoryCategoryNameReport?: string;
        OfferCategoryCategoryFontColorReport?: string;
    }

    export namespace OfferCategoriesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CategoryNameReport';
        export const localTextPrefix = 'Offers.OfferCategoriesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            OfferCategoryId = "OfferCategoryId",
            LanguageId = "LanguageId",
            CategoryNameReport = "CategoryNameReport",
            OfferCategoryOfferId = "OfferCategoryOfferId",
            OfferCategoryCategoryId = "OfferCategoryCategoryId",
            OfferCategoryPrice = "OfferCategoryPrice",
            OfferCategoryCategoryNameReport = "OfferCategoryCategoryNameReport",
            OfferCategoryCategoryFontColorReport = "OfferCategoryCategoryFontColorReport"
        }
    }
}
