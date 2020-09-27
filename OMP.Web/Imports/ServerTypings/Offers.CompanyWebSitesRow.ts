namespace OMP.Offers {
    export interface CompanyWebSitesRow {
        CompanyWebSiteId?: number;
        Name?: string;
        CompanyId?: number;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
        CompanyAdditionalInfo?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace CompanyWebSitesRow {
        export const idProperty = 'CompanyWebSiteId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.CompanyWebSites';
        export const lookupKey = 'Offers.CompanyWebSites';

        export function getLookup(): Q.Lookup<CompanyWebSitesRow> {
            return Q.getLookup<CompanyWebSitesRow>('Offers.CompanyWebSites');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CompanyWebSiteId = "CompanyWebSiteId",
            Name = "Name",
            CompanyId = "CompanyId",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId",
            CompanyAdditionalInfo = "CompanyAdditionalInfo",
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
