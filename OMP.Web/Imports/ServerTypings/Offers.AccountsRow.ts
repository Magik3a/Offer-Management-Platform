namespace OMP.Offers {
    export interface AccountsRow {
        AccountId?: number;
        Name?: string;
        Address?: string;
        Phone?: string;
        CompanyId?: number;
        CityId?: number;
        CompanyName?: string;
        CityName?: string;
        CityCountryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace AccountsRow {
        export const idProperty = 'AccountId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.Accounts';
        export const lookupKey = 'Offers.Accounts';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Offers.Accounts');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AccountId = "AccountId",
            Name = "Name",
            Address = "Address",
            Phone = "Phone",
            CompanyId = "CompanyId",
            CityId = "CityId",
            CompanyName = "CompanyName",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
