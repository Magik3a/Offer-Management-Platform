namespace OMP.Offers {
    export interface OfferCategoryTasksLangRow {
        Id?: number;
        OfferCategoryTaskId?: number;
        LanguageId?: number;
        Name?: string;
        Description?: string;
        OfferCategoryTaskName?: string;
        OfferCategoryTaskDevelopmentTimeHours?: number;
        OfferCategoryTaskDescription?: string;
        OfferCategoryTaskParentOfferCategoryTaskId?: number;
        OfferCategoryTaskOfferCategoryId?: number;
        OfferCategoryTaskTaskStatusId?: number;
    }

    export namespace OfferCategoryTasksLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OfferCategoryTasksLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            OfferCategoryTaskId = "OfferCategoryTaskId",
            LanguageId = "LanguageId",
            Name = "Name",
            Description = "Description",
            OfferCategoryTaskName = "OfferCategoryTaskName",
            OfferCategoryTaskDevelopmentTimeHours = "OfferCategoryTaskDevelopmentTimeHours",
            OfferCategoryTaskDescription = "OfferCategoryTaskDescription",
            OfferCategoryTaskParentOfferCategoryTaskId = "OfferCategoryTaskParentOfferCategoryTaskId",
            OfferCategoryTaskOfferCategoryId = "OfferCategoryTaskOfferCategoryId",
            OfferCategoryTaskTaskStatusId = "OfferCategoryTaskTaskStatusId"
        }
    }
}
