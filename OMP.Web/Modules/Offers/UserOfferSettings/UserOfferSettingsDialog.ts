
namespace OMP.Offers {

    @Serenity.Decorators.panel(true)
    @Serenity.Decorators.registerClass()
    export class UserOfferSettingsDialog extends Serenity.EntityDialog<UserOfferSettingsRow, any> {
        protected getFormKey() { return UserOfferSettingsForm.formKey; }
        protected getIdProperty() { return UserOfferSettingsRow.idProperty; }
        protected getLocalTextPrefix() { return UserOfferSettingsRow.localTextPrefix; }
        protected getNameProperty() { return UserOfferSettingsRow.nameProperty; }
        protected getService() { return UserOfferSettingsService.baseUrl; }
        protected getDeletePermission() { return UserOfferSettingsRow.deletePermission; }
        protected getInsertPermission() { return UserOfferSettingsRow.insertPermission; }
        protected getUpdatePermission() { return UserOfferSettingsRow.updatePermission; }
        protected getIsActiveProperty() { return UserOfferSettingsRow.isActiveProperty; }

        protected form = new UserOfferSettingsForm(this.idPrefix);

        constructor() {
          super();
        }
        loadEntity(entity: UserOfferSettingsRow) {
            super.loadEntity(entity);
            //if (this.isNew()) {
            //    Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
            //}
        }

    }
}