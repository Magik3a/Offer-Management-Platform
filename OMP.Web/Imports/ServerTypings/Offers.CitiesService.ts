namespace OMP.Offers {
    export namespace CitiesService {
        export const baseUrl = 'Offers/Cities';

        export declare function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Offers/Cities/Create",
            Update = "Offers/Cities/Update",
            RetrieveLocalization = "Offers/Cities/RetrieveLocalization",
            Delete = "Offers/Cities/Delete",
            Retrieve = "Offers/Cities/Retrieve",
            List = "Offers/Cities/List"
        }

        [
            'Create', 
            'Update', 
            'RetrieveLocalization', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CitiesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
