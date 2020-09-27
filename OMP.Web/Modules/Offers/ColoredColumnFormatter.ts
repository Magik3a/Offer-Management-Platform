
namespace OMP.Offers {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class ColoredColumnFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!ctx.value) {
                return "";
            }

            var text = "";
            var backgroundColorText;
            var borderColorText;

            if (!this.hideText) {
                text = Q.htmlEncode(ctx.value);
            }

            if (this.backgroundColor) {
                backgroundColorText = "background-color: " + this.backgroundColor + ";";
            }
            else if (this.backgroundProperty) {
                backgroundColorText = "background-color: " + ctx.item[this.backgroundProperty] + ";";
            }


            if (this.borderColor) {
                borderColorText = " border: 1px solid; border-color: " + this.borderColor + ";";
            }
            else if (this.borderProperty) {
                borderColorText = " border: 1px solid; border-color: " + ctx.item[this.borderProperty] + ";";
            }



            //return "<span style='background-color: " + color +";'>" + text + '</span>';

            return "<div class='' style='height: 100%; width: 100%; max-width: 100%; white-space:pre; " + backgroundColorText + " " + borderColorText + " ' > " + text + '</div>' ;

        }
        
        @Serenity.Decorators.option()
        public hideText: boolean;
        @Serenity.Decorators.option()
        public backgroundProperty: string;
        @Serenity.Decorators.option()
        public backgroundColor: string;
        @Serenity.Decorators.option()
        public borderProperty: string;
        @Serenity.Decorators.option()
        public borderColor: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.backgroundProperty)
                column.referencedFields.push(this.backgroundProperty);

            if (this.borderProperty)
                column.referencedFields.push(this.borderProperty);
        }
    }
}