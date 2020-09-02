namespace OMP.Offers {
    export namespace OfferCategoriesLangService {
        export const baseUrl = 'Offers/OfferCategoriesLang';

        export declare function Create(request: Serenity.SaveRequest<OfferCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OfferCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/OfferCategoriesLang/Create",
            Update = "Offers/OfferCategoriesLang/Update",
            Delete = "Offers/OfferCategoriesLang/Delete",
            Retrieve = "Offers/OfferCategoriesLang/Retrieve",
            List = "Offers/OfferCategoriesLang/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OfferCategoriesLangService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
