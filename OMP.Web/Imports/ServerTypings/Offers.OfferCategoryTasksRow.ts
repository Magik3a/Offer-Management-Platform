namespace OMP.Offers {
    export interface OfferCategoryTasksRow {
        OfferCategoryTaskId?: number;
        Name?: string;
        DevelopmentTimeHours?: number;
        Description?: string;
        ParentOfferCategoryTaskId?: number;
        OfferCategoryId?: number;
        TaskStatusId?: number;
        Order?: number;
        ParentOfferCategoryTaskName?: string;
        ParentOfferCategoryTaskDevelopmentTimeHours?: number;
        ParentOfferCategoryTaskDescription?: string;
        ParentOfferCategoryTaskParentOfferCategoryTaskId?: number;
        ParentOfferCategoryTaskOfferCategoryId?: number;
        ParentOfferCategoryTaskTaskStatusId?: number;
        OfferCategoryOfferId?: number;
        OfferCategoryCategoryId?: number;
        OfferCategoryPrice?: number;
        OfferCategoryCategoryNameReport?: string;
        OfferCategoryCategoryFontColorReport?: string;
        TaskStatusName?: string;
        TaskStatusBorderColor?: string;
        TaskStatusBackgroundColor?: string;
        OfferName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace OfferCategoryTasksRow {
        export const idProperty = 'OfferCategoryTaskId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OfferCategoryTasks';
        export const lookupKey = 'Offers.OfferCategoryTasks';

        export function getLookup(): Q.Lookup<OfferCategoryTasksRow> {
            return Q.getLookup<OfferCategoryTasksRow>('Offers.OfferCategoryTasks');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OfferCategoryTaskId = "OfferCategoryTaskId",
            Name = "Name",
            DevelopmentTimeHours = "DevelopmentTimeHours",
            Description = "Description",
            ParentOfferCategoryTaskId = "ParentOfferCategoryTaskId",
            OfferCategoryId = "OfferCategoryId",
            TaskStatusId = "TaskStatusId",
            Order = "Order",
            ParentOfferCategoryTaskName = "ParentOfferCategoryTaskName",
            ParentOfferCategoryTaskDevelopmentTimeHours = "ParentOfferCategoryTaskDevelopmentTimeHours",
            ParentOfferCategoryTaskDescription = "ParentOfferCategoryTaskDescription",
            ParentOfferCategoryTaskParentOfferCategoryTaskId = "ParentOfferCategoryTaskParentOfferCategoryTaskId",
            ParentOfferCategoryTaskOfferCategoryId = "ParentOfferCategoryTaskOfferCategoryId",
            ParentOfferCategoryTaskTaskStatusId = "ParentOfferCategoryTaskTaskStatusId",
            OfferCategoryOfferId = "OfferCategoryOfferId",
            OfferCategoryCategoryId = "OfferCategoryCategoryId",
            OfferCategoryPrice = "OfferCategoryPrice",
            OfferCategoryCategoryNameReport = "OfferCategoryCategoryNameReport",
            OfferCategoryCategoryFontColorReport = "OfferCategoryCategoryFontColorReport",
            TaskStatusName = "TaskStatusName",
            TaskStatusBorderColor = "TaskStatusBorderColor",
            TaskStatusBackgroundColor = "TaskStatusBackgroundColor",
            OfferName = "OfferName",
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
