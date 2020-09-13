namespace OMP.Offers {
    export interface CategoriesRow {
        CategoryId?: number;
        Name?: string;
        DefaultOrder?: number;
        FontColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.Categories';
        export const lookupKey = 'Offers.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('Offers.Categories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name",
            DefaultOrder = "DefaultOrder",
            FontColor = "FontColor",
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
