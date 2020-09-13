namespace OMP.Offers {
    export interface UserOfferSettingsLangRow {
        Id?: number;
        UserOfferSettingId?: number;
        LanguageId?: number;
        OfferInvoiceAdditionalInfoFormatter?: string;
        OfferInvoiceFooterText?: string;
        OfferInvoiceFooterImage?: string;
        UserOfferSettingOfferInvoiceAdditionalInfoFormatter?: string;
        UserOfferSettingOfferInvoiceFooterText?: string;
        UserOfferSettingOfferInvoiceFooterImage?: string;
        UserOfferSettingUserId?: number;
    }

    export namespace UserOfferSettingsLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OfferInvoiceAdditionalInfoFormatter';
        export const localTextPrefix = 'Offers.UserOfferSettingsLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            UserOfferSettingId = "UserOfferSettingId",
            LanguageId = "LanguageId",
            OfferInvoiceAdditionalInfoFormatter = "OfferInvoiceAdditionalInfoFormatter",
            OfferInvoiceFooterText = "OfferInvoiceFooterText",
            OfferInvoiceFooterImage = "OfferInvoiceFooterImage",
            UserOfferSettingOfferInvoiceAdditionalInfoFormatter = "UserOfferSettingOfferInvoiceAdditionalInfoFormatter",
            UserOfferSettingOfferInvoiceFooterText = "UserOfferSettingOfferInvoiceFooterText",
            UserOfferSettingOfferInvoiceFooterImage = "UserOfferSettingOfferInvoiceFooterImage",
            UserOfferSettingUserId = "UserOfferSettingUserId"
        }
    }
}
