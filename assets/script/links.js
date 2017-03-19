// Set non-local links to open in a new window

var ownUrl = "gmph"

window.addEventListener("load", function (e) {
    var as = document.querySelectorAll('a:not([href*="' + ownUrl + '"]):not([href^="/"])');
    for (var i = 0; i < as.length; i++) {
        as[i].target = "_blank";
    }
}, false);
