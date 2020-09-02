namespace OMP.Offers {
    export interface OffersRow {
        OfferId?: number;
        Name?: string;
        Discount?: number;
        MinimumDaysDevelopmentTime?: number;
        MaximumDaysDevelopmentTime?: number;
        StartDate?: string;
        AdditionalInfo?: string;
        CompanyId?: number;
        OfferStatusId?: number;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
        OfferStatusName?: string;
        OfferStatusBorderColor?: string;
        OfferStatusBackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace OffersRow {
        export const idProperty = 'OfferId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Offers.Offers';
        export const lookupKey = 'Offers.Offers';

        export function getLookup(): Q.Lookup<OffersRow> {
            return Q.getLookup<OffersRow>('Offers.Offers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OfferId = "OfferId",
            Name = "Name",
            Discount = "Discount",
            MinimumDaysDevelopmentTime = "MinimumDaysDevelopmentTime",
            MaximumDaysDevelopmentTime = "MaximumDaysDevelopmentTime",
            StartDate = "StartDate",
            AdditionalInfo = "AdditionalInfo",
            CompanyId = "CompanyId",
            OfferStatusId = "OfferStatusId",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId",
            OfferStatusName = "OfferStatusName",
            OfferStatusBorderColor = "OfferStatusBorderColor",
            OfferStatusBackgroundColor = "OfferStatusBackgroundColor",
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
