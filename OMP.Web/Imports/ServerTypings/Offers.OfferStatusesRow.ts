namespace OMP.Offers {
    export interface OfferStatusesRow {
        OfferStatusId?: number;
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

    export namespace OfferStatusesRow {
        export const idProperty = 'OfferStatusId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OfferStatuses';
        export const lookupKey = 'Offers.OfferStatuses';

        export function getLookup(): Q.Lookup<OfferStatusesRow> {
            return Q.getLookup<OfferStatusesRow>('Offers.OfferStatuses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OfferStatusId = "OfferStatusId",
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
