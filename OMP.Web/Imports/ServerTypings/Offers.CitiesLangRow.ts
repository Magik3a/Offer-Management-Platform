namespace OMP.Offers {
    export interface CitiesLangRow {
        Id?: number;
        CityId?: number;
        LanguageId?: number;
        Name?: string;
        CityName?: string;
        CityCountryId?: number;
    }

    export namespace CitiesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.CitiesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CityId = "CityId",
            LanguageId = "LanguageId",
            Name = "Name",
            CityName = "CityName",
            CityCountryId = "CityCountryId"
        }
    }
}
