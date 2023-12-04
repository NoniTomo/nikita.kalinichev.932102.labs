"use strict";
class Square {
    constructor(id){
        this.elem = document.querySelector('#conteiner');
        this.id = id;
        this.toHTML();
    }

    toHTML() {
        this.elem.insertAdjacentHTML('beforeend', `
            <div style="${this.styleSquareToString()}" onclick="deleteElement(event)" class="square-object" id="square-${this.id}"></div>
        `);
    }

    styleSquareToString(){
        let styleSquareArr = [
        `--size-squere-id: calc(var(--size) * ${Math.ceil(Math.random() * 6 + 1)});`,
        `height: var(--size-squere-id);`,
        `width: var(--size-squere-id);`,
        `margin-top: ${Math.ceil(Math.random() * 33)}%;`,
        `margin-left: ${Math.ceil(Math.random() * 87)}%;`
        ];
        return styleSquareArr.join(' ');
    }
}

class Circle {
    constructor(id){
        this.elem = document.querySelector('#conteiner');
        this.id = id;
        this.toHTML();
    }

    toHTML() {
        this.elem.insertAdjacentHTML('beforeend', `
            <div style="${this.styleCircleToString()}" onclick="deleteElement(event)" class="circle-object" id="circle-${this.id}"></div>
        `);
    }

    styleCircleToString() {
        let styleCircleArr = [
            `--size-circle-id: calc(var(--size) * ${Math.ceil(Math.random() * 6 + 1)});`,
            `height: var(--size-circle-id);`,
            `width: var(--size-circle-id);`,
            `border-radius: var(--size-circle-id);`,
            `margin-top: ${Math.ceil(Math.random() * 33)}%;`,
            `margin-left: ${Math.ceil(Math.random() * 87)}%;`
        ]
        return styleCircleArr.join(' ');
    }
}
class Triangle {
    constructor(id){
        this.elem = document.querySelector('#conteiner');
        this.id = id;
        this.toHTML();
    }

    toHTML() {
        this.elem.insertAdjacentHTML('beforeend', `
            <div style="${this.styleTriangleToString()}" onclick="deleteElement(event)" class="triangle-object" id="triangle-${this.id}"></div>
        `);
    }

    styleTriangleToString(){
        let styleTriangleArr = [
        `--size-triangle-id: calc(var(--size) * ${Math.ceil(Math.random() * 6 + 1)});`, 
        `border-left: var(--size-triangle-id) solid transparent;`,
        `border-right: var(--size-triangle-id) solid transparent;`,
        `border-bottom: calc(var(--size-triangle-id) * 2) solid rgba(235, 222, 44, 0.8);`,
        `margin-top: ${Math.ceil(Math.random() * 26)}%;`,
        `margin-left: ${Math.ceil(Math.random() * 83)}%;`
        ]
        return styleTriangleArr.join(' ');
    }
}

class Event {
    constructor(elem) {
        this.collectionObject = [];
        elem.onclick = this.onClick.bind(this);;
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    }

    addSquare() {
        let count = document.getElementById('inputElement').value;
        let idNum = 1;
        for (let i = 0; i < count; i++) {
            let newSquare = new Square(idNum);
            this.collectionObject.push(newSquare);
        }
        document.getElementById('inputElement').value = "";
    }

    addTriangle() {
        let count = document.getElementById('inputElement').value;
        let idNum = 1;
        for (let i = 0; i < count; i++) {
            let newTriangle = new Triangle(idNum);
            this.collectionObject.push(newTriangle);
        }
        document.getElementById('inputElement').value = "";
    }

    addCircle() {
        let count = document.getElementById('inputElement').value;
        let idNum = 1;
        for (let i = 0; i < count; i++) {
            let newCircle = new Circle(idNum);
            this.collectionObject.push(newCircle);
        }
        document.getElementById('inputElement').value = "";
    }

    clear() {
        document.querySelector('#conteiner').innerHTML = "";
        this.collectionObject = [];
    }
}

function deleteElement() {
    const clickedElement = event.target;
    if (clickedElement) {
        clickedElement.remove();
    }
}

new Event(document.querySelector('#saidebar__buttons'));
