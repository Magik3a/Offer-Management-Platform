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
        SoftwareFrameworkId?: number;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
        OfferStatusName?: string;
        OfferStatusBorderColor?: string;
        OfferStatusBackgroundColor?: string;
        SoftwareFrameworkName?: string;
        SoftwareFrameworkBorderColor?: string;
        SoftwareFrameworkBackgroundColor?: string;
        NotCompletedTasks?: number;
        Price?: number;
        TotalPrice?: number;
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
            SoftwareFrameworkId = "SoftwareFrameworkId",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId",
            OfferStatusName = "OfferStatusName",
            OfferStatusBorderColor = "OfferStatusBorderColor",
            OfferStatusBackgroundColor = "OfferStatusBackgroundColor",
            SoftwareFrameworkName = "SoftwareFrameworkName",
            SoftwareFrameworkBorderColor = "SoftwareFrameworkBorderColor",
            SoftwareFrameworkBackgroundColor = "SoftwareFrameworkBackgroundColor",
            NotCompletedTasks = "NotCompletedTasks",
            Price = "Price",
            TotalPrice = "TotalPrice",
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
