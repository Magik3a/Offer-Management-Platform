
namespace OMP.Offers {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class ColoredColumnFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!ctx.value) {
                return "";
            }

            var text = Q.htmlEncode(ctx.value);

            var backgroundColor;
            var borderColor;
            if (this.backgroundProperty) {
                backgroundColor = "background-color: " + ctx.item[this.backgroundProperty] + ";";
            }
            if (this.borderProperty) {
                borderColor = "border-color: " + ctx.item[this.borderProperty] + ";";
            }


            //return "<span style='background-color: " + color +";'>" + text + '</span>';

            return "<div class='' style='height: 100%; width: 100%; max-width: 100%; border: 1px solid; white-space:pre; " + backgroundColor + " " + borderColor + " ' > " + text + '</div>' ;

        }


        @Serenity.Decorators.option()
        public backgroundProperty: string;
        @Serenity.Decorators.option()
        public borderProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.backgroundProperty)
                column.referencedFields.push(this.backgroundProperty);

            if (this.borderProperty)
                column.referencedFields.push(this.borderProperty);
        }
    }
}