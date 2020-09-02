namespace OMP.Offers {
    export interface OffersLangRow {
        Id?: number;
        OfferId?: number;
        LanguageId?: number;
        Name?: string;
        AdditionalInfo?: string;
        OfferName?: string;
        OfferDiscount?: number;
        OfferMinimumDaysDevelopmentTime?: number;
        OfferMaximumDaysDevelopmentTime?: number;
        OfferStartDate?: string;
        OfferAdditionalInfo?: string;
        OfferCompanyId?: number;
        OfferOfferStatusId?: number;
    }

    export namespace OffersLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OffersLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            OfferId = "OfferId",
            LanguageId = "LanguageId",
            Name = "Name",
            AdditionalInfo = "AdditionalInfo",
            OfferName = "OfferName",
            OfferDiscount = "OfferDiscount",
            OfferMinimumDaysDevelopmentTime = "OfferMinimumDaysDevelopmentTime",
            OfferMaximumDaysDevelopmentTime = "OfferMaximumDaysDevelopmentTime",
            OfferStartDate = "OfferStartDate",
            OfferAdditionalInfo = "OfferAdditionalInfo",
            OfferCompanyId = "OfferCompanyId",
            OfferOfferStatusId = "OfferOfferStatusId"
        }
    }
}
