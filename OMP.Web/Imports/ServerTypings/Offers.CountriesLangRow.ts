namespace OMP.Offers {
    export interface CountriesLangRow {
        Id?: number;
        CountryId?: number;
        LanguageId?: number;
        Name?: string;
    }

    export namespace CountriesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.CountriesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CountryId = "CountryId",
            LanguageId = "LanguageId",
            Name = "Name"
        }
    }
}
