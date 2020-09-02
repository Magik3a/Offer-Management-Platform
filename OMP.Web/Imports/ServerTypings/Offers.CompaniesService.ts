namespace OMP.Offers {
    export namespace CompaniesService {
        export const baseUrl = 'Offers/Companies';

        export declare function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/Companies/Create",
            Update = "Offers/Companies/Update",
            Undelete = "Offers/Companies/Undelete",
            Delete = "Offers/Companies/Delete",
            Retrieve = "Offers/Companies/Retrieve",
            List = "Offers/Companies/List"
        }

        [
            'Create', 
            'Update', 
            'Undelete', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CompaniesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
