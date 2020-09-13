namespace OMP.Offers {
    export namespace UserOfferSettingsLangService {
        export const baseUrl = 'Offers/UserOfferSettingsLang';

        export declare function Create(request: Serenity.SaveRequest<UserOfferSettingsLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserOfferSettingsLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserOfferSettingsLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserOfferSettingsLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/UserOfferSettingsLang/Create",
            Update = "Offers/UserOfferSettingsLang/Update",
            Delete = "Offers/UserOfferSettingsLang/Delete",
            Retrieve = "Offers/UserOfferSettingsLang/Retrieve",
            List = "Offers/UserOfferSettingsLang/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserOfferSettingsLangService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
