// hide elements when pressing button
function hideElements(div) {
    var x = document.getElementById(div);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Without JQuery
var slider = new Slider('#ex2', {});