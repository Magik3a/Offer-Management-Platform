namespace OMP.Offers {
    export namespace SoftwareFrameworksService {
        export const baseUrl = 'Offers/SoftwareFrameworks';

        export declare function Create(request: Serenity.SaveRequest<SoftwareFrameworksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SoftwareFrameworksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SoftwareFrameworksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SoftwareFrameworksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/SoftwareFrameworks/Create",
            Update = "Offers/SoftwareFrameworks/Update",
            Delete = "Offers/SoftwareFrameworks/Delete",
            Undelete = "Offers/SoftwareFrameworks/Undelete",
            Retrieve = "Offers/SoftwareFrameworks/Retrieve",
            List = "Offers/SoftwareFrameworks/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SoftwareFrameworksService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
