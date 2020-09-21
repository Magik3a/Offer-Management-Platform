namespace OMP.Offers {
    export namespace UserOfferSettingsService {
        export const baseUrl = 'Offers/UserOfferSettings';

        export declare function Create(request: Serenity.SaveRequest<UserOfferSettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserOfferSettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserOfferSettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveForUser(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserOfferSettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserOfferSettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/UserOfferSettings/Create",
            Update = "Offers/UserOfferSettings/Update",
            Delete = "Offers/UserOfferSettings/Delete",
            Undelete = "Offers/UserOfferSettings/Undelete",
            Retrieve = "Offers/UserOfferSettings/Retrieve",
            RetrieveForUser = "Offers/UserOfferSettings/RetrieveForUser",
            List = "Offers/UserOfferSettings/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'RetrieveForUser', 
            'List'
        ].forEach(x => {
            (<any>UserOfferSettingsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
