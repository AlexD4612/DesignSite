var rect = document.getElementById("designlink1");
var rect2 = document.getElementById("designlink2");
var rect3 = document.getElementById("designlink3");
var designUX = document.getElementsByClassName("desnux");


console.log(designUX);
rect.onmouseover = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Design 2.svg");

};
rect.onmouseout = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Designs.svg");

};




console.log(designUX);
rect2.onmouseover = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Design 3.svg");

};
rect2.onmouseout = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Designs.svg");

};

rect3.onmouseover = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Design 4.svg");

};
rect3.onmouseout = function() {
    console.log(designUX);
    designUX[0].setAttribute("href", "assets/Designs.svg");

};