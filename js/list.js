/*!
 *
 * This file is part of the nginx-fancyindex-flat-theme, licensed under the GNU
 */
function generateList() {
    function whatFormat(e) {
        if (e.endsWith("/")) return "folder";
        switch (e.split(".").pop().toLowerCase()) {
            case "txt":
                return "text";
            case "pdf":
                return "pdf";
            case "bmp":
            case "gif":
            case "jpeg":
            case "jpg":
            case "png":
            case "tif":
            case "tiff":
                return "image";
            case "aac":
            case "aiff":
            case "m4a":
            case "mp3":
            case "ogg":
            case "opus":
            case "wav":
                return "audio";
            case "amv":
            case "avi":
            case "flv":
            case "m4v":
            case "mkv":
            case "mov":
            case "mp4":
            case "m4p":
            case "mpeg":
            case "mpg":
            case "ogv":
            case "vob":
            case "webm":
            case "wmv":
                return "video";
            case "7z":
            case "a":
            case "apk":
            case "ar":
            case "bin":
            case "bz2":
            case "cab":
            case "dmg":
            case "gz":
            case "iso":
            case "jar":
            case "lz":
            case "lzma":
            case "lzo":
            case "pak":
            case "partimg":
            case "rar":
            case "s7z":
            case "tar":
            case "tbz2":
            case "tgz":
            case "tlz":
            case "txz":
            case "xz":
            case "zip":
                return "archive";
            case "doc":
            case "docx":
            case "odt":
            case "rtf":
                return "word";
            case "csv":
            case "ods":
            case "xls":
            case "xlsx":
                return "excel";
            case "odp":
            case "ppt":
            case "pptx":
                return "powerpoint";
            case "c":
            case "class":
            case "cpp":
            case "cs":
            case "h":
            case "hpp":
            case "hxx":
            case "java":
            case "py":
            case "sh":
            case "swift":
            case "vb":
                return "code";
            default:
                return "file";
        }
    }

    function addIcon(e) {
        return '<i class="fa fa-fw ' + function (x) {
            switch (x) {
                case "folder":
                    return "fa-folder";
                case "archive":
                case "audio":
                case "code":
                case "excel":
                case "image":
                case "pdf":
                case "powerpoint":
                case "text":
                case "video":
                case "word":
                    return "fa-file-" + x + "";
                default:
                    return "fa-file";
            }
        }(e) + '" aria-hidden="true"></i>';
    }

    var s = document.getElementById("list");
    s.removeAttribute("cellpadding");
    s.removeAttribute("cellspacing");
    s.classList.add("table", "table-sm", "table-hover", "text-nowrap");
    s.tHead.children[0].classList.add("d-none", "d-md-table-row");
    if (window.location.pathname != '/') {
        s.deleteRow(1);//hidden "Parent directory/"
    }

    for (var c, t = 0; t < s.rows.length; t++) {
        c = s.rows[t];

        filetype = whatFormat(c.cells[0].children[0].innerHTML);

        c.insertCell(0).innerHTML = t > 0 ? addIcon(filetype) : "";

        c.cells[0].classList.add("col-auto");
        c.cells[1].classList.add("col", "filename");
        c.cells[2].classList.add("col-auto", "d-none", "d-md-table-cell");
        c.cells[3].classList.add("col-auto", "d-none", "d-md-table-cell");
        
        if (filetype == "image") {
            c.cells[1].children[0].setAttribute("data-lightbox", "roadtrip"); //cloudflare js css
        }
    }
}