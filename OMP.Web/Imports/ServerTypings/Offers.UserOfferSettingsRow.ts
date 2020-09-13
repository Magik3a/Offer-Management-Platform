namespace OMP.Offers {
    export interface UserOfferSettingsRow {
        UserOfferSettingId?: number;
        OfferInvoiceAdditionalInfoFormatter?: string;
        OfferInvoiceFooterText?: string;
        OfferInvoiceFooterImage?: string;
        UserId?: number;
        UserName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace UserOfferSettingsRow {
        export const idProperty = 'UserOfferSettingId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'OfferInvoiceAdditionalInfoFormatter';
        export const localTextPrefix = 'Offers.UserOfferSettings';
        export const lookupKey = 'Offers.UserOfferSettings';

        export function getLookup(): Q.Lookup<UserOfferSettingsRow> {
            return Q.getLookup<UserOfferSettingsRow>('Offers.UserOfferSettings');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UserOfferSettingId = "UserOfferSettingId",
            OfferInvoiceAdditionalInfoFormatter = "OfferInvoiceAdditionalInfoFormatter",
            OfferInvoiceFooterText = "OfferInvoiceFooterText",
            OfferInvoiceFooterImage = "OfferInvoiceFooterImage",
            UserId = "UserId",
            UserName = "UserName",
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
