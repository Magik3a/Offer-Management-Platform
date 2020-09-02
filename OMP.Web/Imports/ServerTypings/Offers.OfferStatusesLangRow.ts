namespace OMP.Offers {
    export interface OfferStatusesLangRow {
        Id?: number;
        OfferStatusId?: number;
        LanguageId?: number;
        Name?: string;
        OfferStatusName?: string;
        OfferStatusBorderColor?: string;
        OfferStatusBackgroundColor?: string;
    }

    export namespace OfferStatusesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.OfferStatusesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            OfferStatusId = "OfferStatusId",
            LanguageId = "LanguageId",
            Name = "Name",
            OfferStatusName = "OfferStatusName",
            OfferStatusBorderColor = "OfferStatusBorderColor",
            OfferStatusBackgroundColor = "OfferStatusBackgroundColor"
        }
    }
}
