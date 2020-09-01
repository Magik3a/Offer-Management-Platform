
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey() { return 'Offers.Countries'; }
        protected getDialogType() { return CountriesDialog; }
        protected getIdProperty() { return CountriesRow.idProperty; }
        protected getInsertPermission() { return CountriesRow.insertPermission; }
        protected getLocalTextPrefix() { return CountriesRow.localTextPrefix; }
        protected getService() { return CountriesService.baseUrl; }
        protected getIsActiveProperty() { return CountriesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
        protected onViewProcessData(response: Serenity.ListResponse<CountriesRow>): Serenity.ListResponse<CountriesRow> {

            var listResponse = super.onViewProcessData(response);
            console.log(response);
            CountriesService.RetrieveLocalization({
                EntityId: 1
            }, responseLocal => {
                console.log(responseLocal);

            })
            return listResponse;
        }
        //protected onViewSubmit() {
        //    // only continue if base class returns true (didn't cancel request)
        //    if (!super.onViewSubmit()) {
        //        return false;
        //    }

        //    var request = this.view.params as Serenity.ListRequest;
        //    request.IncludeColumns.push("Localizations");


        //    return true;
        //}
    }
}