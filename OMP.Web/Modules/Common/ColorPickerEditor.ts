namespace OMP {
    @Serenity.Decorators.registerEditor("Serenity.ColorPickerEditor")
    export class ColorPickerEditor extends Serenity.StringEditor {
        constructor(input: JQuery) {
            super(input);

            input.attr('type', 'color');
        }
    }
}