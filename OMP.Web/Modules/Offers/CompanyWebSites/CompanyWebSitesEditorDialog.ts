
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class CompanyWebSitesEditorDialog extends Common.GridEditorDialog<CompanyWebSitesRow> {
        protected getFormKey() { return CompanyWebSitesEditorForm.formKey; }
        protected getLocalTextPrefix() { return CompanyWebSitesRow.localTextPrefix; }
        protected getNameProperty() { return CompanyWebSitesRow.nameProperty; }

        protected form = new CompanyWebSitesEditorForm(this.idPrefix);

    }
}