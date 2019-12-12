/*!
 *
 * This file is part of the nginx-fancyindex-flat-theme, licensed under the GNU
 */
function generateBreadcrumbs() {
    function navBar(folderName, folderURL, lastFolder) {
        return '<li class="breadcrumb-item' + (lastFolder ? ' active" aria-current="page"' : '"') + '>' + (lastFolder ? "" : '<a href="' + folderURL + '">') + folderName + (lastFolder ? "" : "</a>");
    }

    for (var folders = window.location.pathname.replace(/\/$/, "").split("/"), listBar = "", folderURL = "", i = 0; i < folders.length; i++) {
        folderURL += folders[i] + "/";
        listBar += navBar(i == 0 ? 'Home' : decodeURIComponent(folders[i]), folderURL, i == folders.length - 1);
    }

    document.getElementById("breadcrumbs").innerHTML = listBar;
}