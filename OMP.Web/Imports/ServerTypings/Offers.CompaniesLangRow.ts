namespace OMP.Offers {
    export interface CompaniesLangRow {
        Id?: number;
        CompanyId?: number;
        LanguageId?: number;
        Name?: string;
        Address?: string;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
    }

    export namespace CompaniesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.CompaniesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CompanyId = "CompanyId",
            LanguageId = "LanguageId",
            Name = "Name",
            Address = "Address",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId"
        }
    }
}
