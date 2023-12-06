"use strict"

class Operation {
    static "+"(a, b) {
        return a + b;
    }
    static "-"(a, b) {
        return a - b;
    }
    static "x"(a, b) {
        return a * b;
    }
    static "/"(a, b) {
        if (b == 0) return "error";
        return a / b;
    }
}

class App {
    constructor(elem) {
        this.currentNumber = ""; 
        this.result = [];
        this.operation = ["+", "-", "x", "/"];
        this.numeral = "0123456789.";
        elem.onclick = this.onClick.bind(this);
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action == "reset-action") this.reset();
        else if (action || action == "equal-action") this.addToFormul(action);
    }

    addToFormul(action) {  
        if (this.operation.includes(action) || action == "equal-action") {
            if(this.currentNumber == "" && this.result.length == 0) this.result.unshift("0");
            if (this.currentNumber.split('.').length < 3 && (this.result[this.result.length - 1] != "")) {
                if (this.currentNumber != "") this.result.push(this.currentNumber);  
                this.currentNumber = "";
                if (action != "equal-action") this.result.push(action);
                document.querySelector('.head__theme').value = "";
            } else {
                document.querySelector('.head__theme').value = "ERROR";
            }
        }
        if (this.numeral.includes(action)) {
            if (this.result.length === 0 || this.operation.includes(this.result[this.result.length - 1])){
                this.currentNumber += action;
            } else {
                this.errorFunction();
                return;
            }
        }
        if (action == "equal-action") {
            this.equal();
        } else if (action == "del") {
            let itemInput = document.querySelector('.input-block__input').value;
            document.querySelector('.input-block__input').value = (itemInput.slice(0, itemInput.length - 1) != "-") ? itemInput.slice(0, itemInput.length - 1) : "";
            if (this.currentNumber != "") (this.currentNumber.slice(0, this.currentNumber.length - 1) != "-") ? this.currentNumber = this.currentNumber.slice(0, this.currentNumber.length - 1) : this.currentNumber = "";
            else if(this.operation.includes(this.result[this.result.length - 1]) || this.result[this.result.length - 1].length == 1 || (this.result[this.result.length - 1].length == 2 && this.result[this.result.length - 1].slice(0,1) == "-")) this.result.pop();
            else this.result[this.result.length - 1] = (this.result[this.result.length - 1].slice(0, -1) != "-") ? this.result[this.result.length - 1].slice(0, -1) : "";
        } else document.querySelector('.input-block__input').value += action;
    }

    equal() {
        let flag = 1;
        if (!this.operation.includes(this.result[this.result.length - 1])) {
            while (this.result.length > 1) {
                while (this.result.find(item => item === this.operation[3] || item === this.operation[2])) {
                    let index = this.result.findIndex(item => item === this.operation[3] || item === this.operation[2]);
                    let op = this.result[index];
                    this.result.splice(index - 1, 3, `${Operation[op](parseFloat(this.result[index - 1]), parseFloat(this.result[index + 1]))}`);
                }
                while (this.result.find(item => item === this.operation[0] || item === this.operation[1])) {
                    let index = this.result.findIndex(item => item === this.operation[0] || item === this.operation[1]);
                    let op = this.result[index];
                    let test = Operation[op](parseFloat(this.result[index - 1]), parseFloat(this.result[index + 1]));
                    if (test != "error") this.result.splice(index - 1, 3, `${Operation[op](parseFloat(this.result[index - 1]), parseFloat(this.result[index + 1]))}`);
                    else {
                        flag = 0;
                        this.errorFunction();
                        break;
                    }
                }
                if(!flag) break;
            }
            if (this.result.length) document.querySelector('.input-block__input').value = this.result[0];
            else this.errorFunction();
        } else {
            this.errorFunction();
        }
    }

    errorFunction() {
        this.currentNumber = "";  
        this.result = [];
        this.firstPriorityOperation = [];
        this.secondPriorityOperation = [];
        document.querySelector('.input-block__input').value = "error";
    }

    reset () {
        this.currentNumber = "";  
        this.result = [];
        this.firstPriorityOperation = [];
        this.secondPriorityOperation = [];
        document.querySelector('.input-block__input').value = "";
    }
}

new App(document.querySelector(".keyboard-block"));
