
namespace OMP.Offers {

    import fld = OfferCategoryTasksRow.Fields;
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


        //protected usePager() {
        //    return false;
        //}
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();

            let filter = Q.first(filters, x => x.field == fld.TaskStatusId);
            filter.title = "Task Status Different Than";
            filter.cssClass = "task-status-id";
            filter.handler = h => {
                // if filter is active, e.g. editor has some value
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.or(h.request.Criteria, ['is null', [fld.TaskStatusId]],
                        [[fld.TaskStatusId], 'not in', [h.value]]);
                }
            };
            return filters;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('DevelopmentTimeHours')
                ]
            });

            return grid;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
    }
}