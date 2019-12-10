/*!
 *
 * This file is part of the nginx-fancyindex-flat-theme, licensed under the GNU
 */
function generateBreadcrumbs() {
    function e(e, n, r) {
        return '<li class="breadcrumb-item' + (r ? ' active aria-current="page' : "") + '">' + (r ? "" : '<a href="' + n + '">') + e + (r ? "" : "</a>");
    }

    for (var n = window.location.pathname.replace(/\/$/, "").split("/"), r = "", a = "", t = 0; t < n.length; t++) {
        a += n[t] + "/";
        r += e(0 == t ? "Home" : decodeURIComponent(n[t]), a, t == n.length - 1);
    }
    document.getElementById("breadcrumbs").innerHTML = r;
}
