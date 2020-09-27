/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompanyWebSitesEditor extends Common.GridEditorBase<CompanyWebSitesRow> {
        protected getColumnsKey() { return 'Offers.CompanyWebSitesEditor'; }
        protected getDialogType() { return CompanyWebSitesEditorDialog; }
        protected getLocalTextPrefix() { return CompanyWebSitesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.CompanyWebSiteId = Q.toId(row.CompanyWebSiteId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.CompanyWebSiteId === row.CompanyWebSiteId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This website is already existing!');
                return false;
            }

            //row.Name = ProductRow.getLookup().itemById[row.ProductID].ProductName;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}