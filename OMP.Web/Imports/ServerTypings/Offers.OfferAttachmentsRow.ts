namespace OMP.Offers {
    export interface OfferAttachmentsRow {
        OfferAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        OfferId?: number;
        OfferName?: string;
        OfferDiscount?: number;
        OfferMinimumDaysDevelopmentTime?: number;
        OfferMaximumDaysDevelopmentTime?: number;
        OfferStartDate?: string;
        OfferAdditionalInfo?: string;
        OfferCompanyId?: number;
        OfferOfferStatusId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace OfferAttachmentsRow {
        export const idProperty = 'OfferAttachmentId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OfferAttachments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OfferAttachmentId = "OfferAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            OfferId = "OfferId",
            OfferName = "OfferName",
            OfferDiscount = "OfferDiscount",
            OfferMinimumDaysDevelopmentTime = "OfferMinimumDaysDevelopmentTime",
            OfferMaximumDaysDevelopmentTime = "OfferMaximumDaysDevelopmentTime",
            OfferStartDate = "OfferStartDate",
            OfferAdditionalInfo = "OfferAdditionalInfo",
            OfferCompanyId = "OfferCompanyId",
            OfferOfferStatusId = "OfferOfferStatusId",
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
