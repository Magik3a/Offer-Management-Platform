namespace OMP.Offers {
    export namespace OfferCategoryTasksLangService {
        export const baseUrl = 'Offers/OfferCategoryTasksLang';

        export declare function Create(request: Serenity.SaveRequest<OfferCategoryTasksLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OfferCategoryTasksLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoryTasksLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoryTasksLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/OfferCategoryTasksLang/Create",
            Update = "Offers/OfferCategoryTasksLang/Update",
            Delete = "Offers/OfferCategoryTasksLang/Delete",
            Retrieve = "Offers/OfferCategoryTasksLang/Retrieve",
            List = "Offers/OfferCategoryTasksLang/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OfferCategoryTasksLangService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
