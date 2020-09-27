
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

        protected getButtons() {
          var buttons = super.getButtons();

          buttons.push(Common.ExcelExportHelper.createToolButton({
            grid: this,
            service: OffersService.baseUrl + '/ListExcel',
            onViewSubmit: () => this.onViewSubmit(),
            separator: true
          }));

          buttons.push(Common.PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit()
          }));

          buttons.push({
              title: 'Group By Offer',
              cssClass: 'expand-all-button offer-group-button',
              onClick: () => this.view.setGrouping(
                [{
                  getter: fld.OfferName
                }])
            },
            {
              title: 'Group By Offer and Category',
                cssClass: 'expand-all-button offer-group-button',
              onClick: () => this.view.setGrouping(
                [{
                  formatter: x => 'Offer: ' + x.value + ' (' + x.count + ' items)',
                    getter: fld.OfferName
                }, {
                        formatter: x => 'Offer Category: ' + x.value + ' (' + x.count + ' items)',
                        getter: fld.OfferCategoryCategoryNameReport
                }])
            }, {
              title: 'No Grouping',
              cssClass: 'collapse-all-button',
              onClick: () => this.view.setGrouping([])
            });

          return buttons;
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
        protected markupReady() {
          super.markupReady();
            this.view.setGrouping([{
              formatter: x => 'Offer: ' + x.value + ' (' + x.count + ' items)',
              getter: fld.OfferName
            }, {
              formatter: x => 'Offer Category: ' + x.value + ' (' + x.count + ' items)',
              getter: fld.OfferCategoryCategoryNameReport
            }]);
          // expanding all level 0 (Country) and level 1 (City) groups initially
          this.view.expandAllGroups(null);
        }
    }
}