"use strict"

function shiftImage(targetButtonID) {
    if (targetButtonID == 1){
        $("#"+1).style.flex = "none";
        $("#"+1).style.width = "80%";
        $("#"+3).style.flex = "none";
        $("#"+3).style.width = "20%";
        document.getElementById("cat").style.display = "none";
    }
    if (targetButtonID == 2)
    if (targetButtonID == 3)
}

let buttons = document.querySelectorAll("navigation-block-button");
buttons.forEach((item) =>{
    let targetButtonID = item.getAttribute("target-button-id");

    item.addEventListener("click", () => shiftImage(targetButtonID));
})
