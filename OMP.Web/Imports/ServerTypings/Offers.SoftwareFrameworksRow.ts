namespace OMP.Offers {
    export interface SoftwareFrameworksRow {
        SoftwareFrameworkId?: number;
        Name?: string;
        Description?: string;
        SpecificVersion?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace SoftwareFrameworksRow {
        export const idProperty = 'SoftwareFrameworkId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.SoftwareFrameworks';
        export const lookupKey = 'Offers.SoftwareFrameworks';

        export function getLookup(): Q.Lookup<SoftwareFrameworksRow> {
            return Q.getLookup<SoftwareFrameworksRow>('Offers.SoftwareFrameworks');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SoftwareFrameworkId = "SoftwareFrameworkId",
            Name = "Name",
            Description = "Description",
            SpecificVersion = "SpecificVersion",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
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
