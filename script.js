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
