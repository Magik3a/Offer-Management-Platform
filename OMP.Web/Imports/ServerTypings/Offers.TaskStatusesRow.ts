namespace OMP.Offers {
    export interface TaskStatusesRow {
        TaskStatusId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        CountForCompleted?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace TaskStatusesRow {
        export const idProperty = 'TaskStatusId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.TaskStatuses';
        export const lookupKey = 'Offers.TaskStatuses';

        export function getLookup(): Q.Lookup<TaskStatusesRow> {
            return Q.getLookup<TaskStatusesRow>('Offers.TaskStatuses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TaskStatusId = "TaskStatusId",
            Name = "Name",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
            CountForCompleted = "CountForCompleted",
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
