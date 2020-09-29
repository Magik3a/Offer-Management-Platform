namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OffersEntityDialog<TEntity, TOptions> extends Serenity.EntityDialog<TEntity, TOptions> {
        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            console.log(buttons);
            let applyChanges = Q.first(buttons,
                b => b.cssClass === 'apply-changes-button');
            applyChanges.title =
                Q.text('Controls.EntityDialog.ApplyChangesButton');

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();
            // apply changes button doesn't work properly with in-memory grids yet
            //if (this.applyChangesButton) {
            //    this.applyChangesButton.hide();
            //}
        }

    }
}