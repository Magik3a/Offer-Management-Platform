
namespace OMP.TabsExtensions {


  export function setCounter(grid: JQuery, totalCount: number, tabKey: string) {
    var tabs = grid.closest(".ui-tabs");
    var indexByKey = Serenity.TabsExtensions.indexByKey(tabs);
    var tabTitle = $(tabs.find("li[role='tab']")[indexByKey[tabKey]]).find('span');
    var leftParenthesesPosition = tabTitle.text().indexOf('(');
    var rightParenthesesPosition = tabTitle.text().indexOf(')');
    if (leftParenthesesPosition != -1 && rightParenthesesPosition != -1) {
      // counter already exists
      if (totalCount > 0) {
        var prevCounter = tabTitle.text().substring(leftParenthesesPosition + 1, rightParenthesesPosition);
        tabTitle.text(tabTitle.text().replace(prevCounter, totalCount.toString()));
      } else {
        tabTitle.text(tabTitle.text().substring(0, leftParenthesesPosition - 1));
      }
    } else {
      // counter not exists
      if (totalCount > 0) tabTitle.text(tabTitle.text() + ' (' + totalCount + ')');
    }
  }

}