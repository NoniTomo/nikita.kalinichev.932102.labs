"use strict"

const name1 = document.getElementById('news1');
const name2 = document.getElementById('news2');
const name3 = document.getElementById('news3');
const overlayElements = Array.from(document.getElementsByClassName('overlay'));

function openModal (name1) {
    name1.style.display = "block";
    overlayElements.forEach(element => {
        element.style.display = "block";
    })
}

function closeModal (name1) {
    name1.style.display = "none";
    overlayElements.forEach(element => {
        element.style.display = "none";
    })
}

function buttonFunction1() {
    openModal(name1);
}

function buttonFunction2() {
    openModal(name2);
}

function buttonFunction3() {
    openModal(name3);
}