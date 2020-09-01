namespace OMP.Offers {
    export interface CitiesRow {
        CityId?: number;
        Name?: string;
        CountryId?: number;
        CountryName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace CitiesRow {
        export const idProperty = 'CityId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.Cities';
        export const lookupKey = 'Offers.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('Offers.Cities');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name",
            CountryId = "CountryId",
            CountryName = "CountryName",
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
