namespace OMP.Offers {
    export namespace OfferCategoryTasksService {
        export const baseUrl = 'Offers/OfferCategoryTasks';

        export declare function Create(request: Serenity.SaveRequest<OfferCategoryTasksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OfferCategoryTasksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoryTasksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoryTasksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/OfferCategoryTasks/Create",
            Update = "Offers/OfferCategoryTasks/Update",
            Undelete = "Offers/OfferCategoryTasks/Undelete",
            Delete = "Offers/OfferCategoryTasks/Delete",
            Retrieve = "Offers/OfferCategoryTasks/Retrieve",
            List = "Offers/OfferCategoryTasks/List"
        }

        [
            'Create', 
            'Update', 
            'Undelete', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OfferCategoryTasksService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
