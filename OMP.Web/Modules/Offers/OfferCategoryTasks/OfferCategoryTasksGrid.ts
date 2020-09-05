
namespace OMP.Offers {

    @Serenity.Decorators.registerClass()
    export class OfferCategoryTasksGrid extends Serenity.EntityGrid<OfferCategoryTasksRow, any> {
        protected getColumnsKey() { return 'Offers.OfferCategoryTasks'; }
        protected getDialogType() { return OfferCategoryTasksDialog; }
        protected getIdProperty() { return OfferCategoryTasksRow.idProperty; }
        protected getInsertPermission() { return OfferCategoryTasksRow.insertPermission; }
        protected getLocalTextPrefix() { return OfferCategoryTasksRow.localTextPrefix; }
        protected getService() { return OfferCategoryTasksService.baseUrl; }
        protected getIsActiveProperty() { return OfferCategoryTasksRow.isActiveProperty; }


        private treeMixin: Serenity.TreeGridMixin<OfferCategoryTasksRow>;

        constructor(container: JQuery) {
            super(container);
            this.treeMixin = new Serenity.TreeGridMixin(  {
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => false,
                // which column to place tree toggle / expand/collapse button
                toggleField: OfferCategoryTasksRow.Fields.OfferCategoryTaskId,
                getParentId: x => x.ParentOfferCategoryTaskId,
            });

        }
    }
}