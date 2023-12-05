class Item {
    constructor (id) {
        this.elem = document.querySelector('#content-element');
        this.id = id;
        this.toHTML ();
    }

    toHTML () {
        this.elem.insertAdjacentHTML("afterbegin", `
        <div class="content-module__item" id="item-${this.id}">
        <input class="input-item" id="input-name"></input>
        <input class="input-item" id="input-value"></input>
        <button class="item-button" onclick="App.toUp(event)" style="background-image: url(free-icon-up-arrow-109583.png);"></button>
        <button class="item-button" onclick="App.toDown(event)" style="background-image: url(free-icon-download-arrow-109611.png);"></button>
        <button class="item-button" onclick="App.removeElement(event)" style="background-image: url(free-icon-letter-x-109602.png);"></button>
        </div>
        `);
    }
}

class App {
    constructor (elem) {
        this.id = 0;
        elem.onclick = this.onClick.bind(this);
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    }
    save () {
        document.querySelector('#content-module__text').innerHTML = this.toJSON();
    }
    toJSON() {
        let docElementChildren = document.querySelector('#content-element').children;
        let result = {};
        for(let currentElement of docElementChildren) {
            result[currentElement.querySelector('#input-name').value] = currentElement.querySelector('#input-value').value;
        }
        return JSON.stringify(result);
    }
    add () {
        new Item(this.id++);
    }
    static toUp(event){
        const elem = event.target;
        let siblingElem = elem.parentElement.previousElementSibling;
        if (siblingElem) elem.parentElement.after(siblingElem);
    }
    static toDown(event){
        const elem = event.target;
        let siblingElem = elem.parentElement.nextElementSibling;
        if (siblingElem) siblingElem.after(elem.parentElement);
    }
    static removeElement(event){
        const elem = event.target;
        elem.parentElement.remove();
    }
}

new App(document.querySelector('.content-module__buttons'));











/*class Item {
    constructor (name, value, id) {
        this.elem = document.querySelector('#content-element');
        this.id = id;
        this.name = name;
        this.value = value;
        this.toHTML ();
    }

    toHTML () {
        this.elem.insertAdjacentHTML("afterbegin", `
        <div class="content-module__item" id="item-${this.id}">
        <input class="input-item" id="input-name">${this.name}</input>
        <input class="input-item" id="input-value">${this.value}</input>
        <button class="item-button up-arrow" style="background-image: url(free-icon-up-arrow-109583.png);"></button>
        <button class="item-button arrow-to-down" style="background-image: url(free-icon-download-arrow-109611.png);"></button>
        <button class="item-button cross" style="background-image: url(free-icon-letter-x-109602.png);"></button>
        </div>
        `);
    }
}

class App {
    constructor (elem) {
        this.arrayElemnts = [];
        this.id = 0;
        elem.onclick = this.onClick.bind(this);
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    }
    save () {
        document.querySelector('#content-element').insertAdjacentHTML('beforeend', toJSON());
    }
    toJSON() {
        let result = {};
            for(let currentElement of this.arrayElemnts) {
                result[currentElement.name] = currentElement.value;
            }
            return JSON.stringify(result);
    }
    add () {
        let name = document.querySelector('#input-name').value;
        let value = document.querySelector('#input-value').value;
        let element = new Item(name, value, this.id++);
        this.arrayElemnts.push(element);
    }
    appToUp(elem){
        siblingElem = elem.previousElementSibling;
        this.swapID(elem, siblingElem);
        elem.between(siblingElem);
    }
    appToDown(){
        siblingElem = elem.nextElementSibling;
        this.swapID(elem, siblingElem);
        elem.after(nextElem);
    }
    removeElement(){
        elem.remove();
    }
    swapID(elem, siblingElem) {
        elemID = elem.id;
        siblingID = siblingElem.id;
        elem.id = "tt";
        siblingElem.id = elemID;
        elem.id = siblingID;
        arrayElemnts.find(item => (item.id == elemID)).id = "tt";
        arrayElemnts.find(item => (item.id == siblingID)).id = elemID;
        arrayElemnts.find(item => (item.id == "tt")).id = siblingID;
    }
}

function toUp(event) {
    let clickedElement = event.target;
    if(clickedElement) {
        App.appToUp(clickedElement);
    }
}

function toDown(event) {
    let clickedElement = event.target;
    if(clickedElement) {
        App.appToDown(clickedElement);
    }
}

function removeElement(event) {
    let clickedElement = event.target;
    if(clickedElement) {
        App.appRemoveElement(clickedElement);
    }
}

new App(document.querySelector('.content-module__buttons'));*/