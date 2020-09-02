namespace OMP.Offers {
    export interface CategoriesLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        Name?: string;
        CategoryName?: string;
        CategoryFontColor?: string;
    }

    export namespace CategoriesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.CategoriesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            Name = "Name",
            CategoryName = "CategoryName",
            CategoryFontColor = "CategoryFontColor"
        }
    }
}
