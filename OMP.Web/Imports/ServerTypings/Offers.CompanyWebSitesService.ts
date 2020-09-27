namespace OMP.Offers {
    export namespace CompanyWebSitesService {
        export const baseUrl = 'Offers/CompanyWebSites';

        export declare function Create(request: Serenity.SaveRequest<CompanyWebSitesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CompanyWebSitesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyWebSitesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyWebSitesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/CompanyWebSites/Create",
            Update = "Offers/CompanyWebSites/Update",
            Delete = "Offers/CompanyWebSites/Delete",
            Undelete = "Offers/CompanyWebSites/Undelete",
            Retrieve = "Offers/CompanyWebSites/Retrieve",
            List = "Offers/CompanyWebSites/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CompanyWebSitesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
