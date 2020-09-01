namespace OMP.Administration {
    export interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }

    export namespace NoteRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'Northwind.Note';
        export const deletePermission = null;
        export const insertPermission = null;
        export const readPermission = '';
        export const updatePermission = null;

        export declare const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
