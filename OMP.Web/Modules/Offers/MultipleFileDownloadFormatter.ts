
namespace OMP.Offers {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    export class MultipleFileDownloadFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!ctx.value) {
                return "";
            }
            let files = JSON.parse(ctx.value);
            var columnValue = "";

            for (var i = 0; i < files.length; i++) {
                var fileDownloadName = "";
                var downloadUrl = Serenity.FileDownloadFormatter.dbFileUrl(files[i].Filename);
                if (this.showFileNames) {
                    fileDownloadName = Q.htmlEncode(files[i].OriginalName);
                }

                columnValue += "<a class='file-download-link' target='_blank' title='" + files[i].OriginalName + "' href='" +
                    Q.attrEncode(downloadUrl) + "'>" + fileDownloadName + '</a>';
            }
            return columnValue;

        }

        @Serenity.Decorators.option()
        public showFileNames: boolean;

    }
}