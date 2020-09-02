namespace OMP.Offers {
    export interface OfferCategoriesRow {
        OfferCategoryId?: number;
        OfferId?: number;
        CategoryId?: number;
        Price?: number;
        CategoryNameReport?: string;
        CategoryFontColorReport?: string;
        OfferName?: string;
        OfferDiscount?: number;
        OfferMinimumDaysDevelopmentTime?: number;
        OfferMaximumDaysDevelopmentTime?: number;
        OfferStartDate?: string;
        OfferAdditionalInfo?: string;
        OfferCompanyId?: number;
        OfferOfferStatusId?: number;
        CategoryName?: string;
        CategoryFontColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }

    export namespace OfferCategoriesRow {
        export const idProperty = 'OfferCategoryId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CategoryNameReport';
        export const localTextPrefix = 'Offers.OfferCategories';
        export const lookupKey = 'Offers.OfferCategories';

        export function getLookup(): Q.Lookup<OfferCategoriesRow> {
            return Q.getLookup<OfferCategoriesRow>('Offers.OfferCategories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OfferCategoryId = "OfferCategoryId",
            OfferId = "OfferId",
            CategoryId = "CategoryId",
            Price = "Price",
            CategoryNameReport = "CategoryNameReport",
            CategoryFontColorReport = "CategoryFontColorReport",
            OfferName = "OfferName",
            OfferDiscount = "OfferDiscount",
            OfferMinimumDaysDevelopmentTime = "OfferMinimumDaysDevelopmentTime",
            OfferMaximumDaysDevelopmentTime = "OfferMaximumDaysDevelopmentTime",
            OfferStartDate = "OfferStartDate",
            OfferAdditionalInfo = "OfferAdditionalInfo",
            OfferCompanyId = "OfferCompanyId",
            OfferOfferStatusId = "OfferOfferStatusId",
            CategoryName = "CategoryName",
            CategoryFontColor = "CategoryFontColor",
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
