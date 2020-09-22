
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
                var backgroundStyle = "background: ";
                if (Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".doc") || Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".docx")) {
                    backgroundStyle += "url(/Content/serenity/images/docx.png) no-repeat left 1px;";
                } else if (Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".xls") || Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".xlsx")) {
                    backgroundStyle += "url(/Content/serenity/images/xlsx.png) no-repeat left 1px;";

                } else if (Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".pdf")) {
                    backgroundStyle += "url(/Content/serenity/images/pdf.png) no-repeat left 1px;";

                } else if (Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".png") || Q.endsWith(Q.htmlEncode(files[i].OriginalName), ".jpg")) {
                    backgroundStyle += "url(/Content/serenity/images/jpg.png) no-repeat left 1px;";

                }
                columnValue += "<a style='" + backgroundStyle + "' class='file-download-link' target='_blank' title='" + files[i].OriginalName + "' href='" +
                    Q.attrEncode(downloadUrl) + "'>" + fileDownloadName + ' </a>';
            }
            return columnValue;

        }

        @Serenity.Decorators.option()
        public showFileNames: boolean;

    }
}