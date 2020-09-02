namespace OMP.Offers {
    export namespace OfferCategoriesService {
        export const baseUrl = 'Offers/OfferCategories';

        export declare function Create(request: Serenity.SaveRequest<OfferCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OfferCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/OfferCategories/Create",
            Update = "Offers/OfferCategories/Update",
            Delete = "Offers/OfferCategories/Delete",
            Undelete = "Offers/OfferCategories/Undelete",
            Retrieve = "Offers/OfferCategories/Retrieve",
            List = "Offers/OfferCategories/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OfferCategoriesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
