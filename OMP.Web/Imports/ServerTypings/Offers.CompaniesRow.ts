namespace OMP.Offers {
    export interface CompaniesRow {
        CompanyId?: number;
        Name?: string;
        Address?: string;
        Phone?: string;
        CityId?: number;
        PrimaryAccountId?: number;
        CityName?: string;
        CityCountryId?: number;
        PrimaryAccountName?: string;
        PrimaryAccountAddress?: string;
        PrimaryAccountPhone?: string;
        PrimaryAccountCityId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace CompaniesRow {
        export const idProperty = 'CompanyId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.Companies';
        export const lookupKey = 'Offers.Companies';

        export function getLookup(): Q.Lookup<CompaniesRow> {
            return Q.getLookup<CompaniesRow>('Offers.Companies');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CompanyId = "CompanyId",
            Name = "Name",
            Address = "Address",
            Phone = "Phone",
            CityId = "CityId",
            PrimaryAccountId = "PrimaryAccountId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            PrimaryAccountName = "PrimaryAccountName",
            PrimaryAccountAddress = "PrimaryAccountAddress",
            PrimaryAccountPhone = "PrimaryAccountPhone",
            PrimaryAccountCityId = "PrimaryAccountCityId",
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
