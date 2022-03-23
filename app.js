document.getElementById("demo").onmouseover = function name(params) {mouseOver() };
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("demo").style.color = "#00FFF8";
}

function mouseOut() {
    document.getElementById("demo").style.color = "white";
}
