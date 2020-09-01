namespace OMP.Offers {
    export namespace CountriesService {
        export const baseUrl = 'Offers/Countries';

        export declare function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/Countries/Create",
            Update = "Offers/Countries/Update",
            Delete = "Offers/Countries/Delete",
            Undelete = "Offers/Countries/Undelete",
            RetrieveLocalization = "Offers/Countries/RetrieveLocalization",
            Retrieve = "Offers/Countries/Retrieve",
            List = "Offers/Countries/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'RetrieveLocalization', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CountriesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
