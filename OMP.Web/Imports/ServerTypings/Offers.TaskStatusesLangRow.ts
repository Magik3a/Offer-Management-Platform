namespace OMP.Offers {
    export interface TaskStatusesLangRow {
        Id?: number;
        TaskStatusId?: number;
        LanguageId?: number;
        Name?: string;
        TaskStatusName?: string;
        TaskStatusBorderColor?: string;
        TaskStatusBackgroundColor?: string;
    }

    export namespace TaskStatusesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.TaskStatusesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TaskStatusId = "TaskStatusId",
            LanguageId = "LanguageId",
            Name = "Name",
            TaskStatusName = "TaskStatusName",
            TaskStatusBorderColor = "TaskStatusBorderColor",
            TaskStatusBackgroundColor = "TaskStatusBackgroundColor"
        }
    }
}
