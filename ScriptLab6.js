"use strict";

function shiftRightImage(){
    document.getElementById("right-image").style.flex = "auto";
    document.getElementById("right-image").style.width = "100%";
    document.getElementById("left-image").style.flex = "auto";
    document.getElementById("left-image").style.width = "0";
    document.getElementById("cat").style.display = "none";
    document.getElementById("dog").style.display = "block";
}
function shiftLeftImage(){
    document.getElementById("left-image").style.flex = "auto";
    document.getElementById("left-image").style.width = "100%";
    document.getElementById("right-image").style.flex = "auto";
    document.getElementById("right-image").style.width = "0%";
    document.getElementById("dog").style.display = "none";
    document.getElementById("cat").style.display = "block";
}
function returnBothImage(){
    document.getElementById("left-image").style.flex = "auto";
    document.getElementById("left-image").style.width = "auto";
    document.getElementById("right-image").style.flex = "auto";
    document.getElementById("right-image").style.width = "auto";
    document.getElementById("cat").style.display = "block";
    document.getElementById("dog").style.display = "block";
}