
namespace OMP.Offers {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class FontColorColumnFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!ctx.value) {
                return "";
            }

            var text = Q.htmlEncode(ctx.value);

            var backgroundColor;
            if (this.fontColorProperty) {
                backgroundColor = "color: " + ctx.item[this.fontColorProperty] + ";";
            }

            //return "<span style='background-color: " + color +";'>" + text + '</span>';

            return "<div class='' style='height: 100%; width: 100%; max-width: 100%;  white-space:pre; " + backgroundColor +
                "' > <span> " + text + '</span> </div>';

        }


        @Serenity.Decorators.option()
        public fontColorProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.fontColorProperty)
                column.referencedFields.push(this.fontColorProperty);
        }
    }
}