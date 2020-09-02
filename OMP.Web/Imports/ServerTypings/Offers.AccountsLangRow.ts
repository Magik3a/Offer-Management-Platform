namespace OMP.Offers {
    export interface AccountsLangRow {
        Id?: number;
        AccountId?: number;
        LanguageId?: number;
        Name?: string;
        Address?: string;
        AccountName?: string;
        AccountAddress?: string;
        AccountPhone?: string;
        AccountCityId?: number;
    }

    export namespace AccountsLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.AccountsLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            AccountId = "AccountId",
            LanguageId = "LanguageId",
            Name = "Name",
            Address = "Address",
            AccountName = "AccountName",
            AccountAddress = "AccountAddress",
            AccountPhone = "AccountPhone",
            AccountCityId = "AccountCityId"
        }
    }
}
