// const buttonsRef: HTMLElement | null = document.querySelector(".btn-wrapper");
// let equalResult: string = "";
// buttonsRef?.addEventListener("click", appendToResult);
// function appendToResult(e: Event) {
//   if (!(e.target instanceof HTMLElement)) {
//     return;
//   }
//   if (e.target.id === "clear") {
//     clearResult();
//     return;
//   }
//   if (e.target.id === "equal") {
//     calculateResult();
//     return;
//   }
//   equalResult += e.target.id;
//   const resultElement = document.getElementById("result") as HTMLInputElement;
//   resultElement.value = e.target.id;
// }
// function clearResult() {
//   const resultElement = document.getElementById("result") as HTMLInputElement;
//   resultElement.value = "";
// }
// function calculateResult() {
//   try {
//     const sanitizedResult = equalResult.replace(/[^-()\d/*+.]/g, "");
//     const resultElement = document.getElementById("result") as HTMLInputElement;
//     resultElement.value = Function(
//       '"use strict";return (' + sanitizedResult + ")"
//     )();
//   } catch (error) {
//     const resultElement = document.getElementById("result") as HTMLInputElement;
//     resultElement.value = "Error";
//   }
// }
class Calculator {
    constructor() {
        this.currentResult = 0;
        this.isNegative = false;
        this.display = "";
        this.sign = "";
    }
    addSign(sign) {
        this.sign = sign;
    }
    getSign() {
        return this.sign;
    }
    addToDisplay(string) {
        this.display += string;
    }
    clearDisplay() {
        this.display = "";
    }
    getDisplay() {
        return this.display;
    }
    add(number) {
        this.currentResult += this.isNegative ? -number : number;
        this.sign = "add";
    }
    subtract(number) {
        if (this.currentResult === 0) {
            this.currentResult = number;
        }
        else {
            this.currentResult -= this.isNegative ? -number : number;
        }
    }
    multiply(number) {
        if (this.currentResult === 0) {
            this.currentResult = number;
        }
        else {
            this.currentResult *= this.isNegative ? -number : number;
        }
    }
    divide(number) {
        if (this.currentResult === 0) {
            this.currentResult = number;
        }
        else {
            this.currentResult /= this.isNegative ? -number : number;
        }
    }
    toggleSign() {
        if (this.currentResult !== 0) {
            this.currentResult = -this.currentResult;
        }
        this.isNegative = !this.isNegative;
    }
    calculatePercentage(percentage) {
        this.currentResult *= percentage / 100;
    }
    getResult() {
        return this.currentResult;
    }
    clearResult() {
        this.currentResult = 0;
    }
}
const calculator = new Calculator();
const buttonsRef = document.querySelector(".btn-wrapper");
const displayRef = document.getElementById("result");
buttonsRef.addEventListener("click", appendToResult);
displayRef.value = "0";
function appendToResult(e) {
    if (!(e.target instanceof HTMLElement)) {
        return;
    }
    if (e.target.id === "clear") {
        calculator.clearDisplay();
        calculator.clearResult();
        displayRef.value = "0";
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "equal") {
        const sign = calculator.getSign();
        if (sign === "add") {
            calculator.add(Number(calculator.getDisplay()));
        }
        if (sign === "subtract") {
            calculator.subtract(Number(calculator.getDisplay()));
        }
        if (sign === "multiply") {
            calculator.multiply(Number(calculator.getDisplay()));
        }
        if (sign === "divide") {
            calculator.divide(Number(calculator.getDisplay()));
        }
        displayRef.value = calculator.getResult().toString();
        calculator.clearDisplay();
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "toggle") {
        calculator.addSign("");
        calculator.toggleSign();
        displayRef.value = `-${calculator.getDisplay()}`;
        calculator.clearDisplay();
        calculator.addToDisplay(displayRef.value);
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "add") {
        calculator.addSign("add");
        calculator.add(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "+";
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "subtract") {
        calculator.addSign("subtract");
        calculator.subtract(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "-";
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "multiply") {
        calculator.addSign("multiply");
        calculator.multiply(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "x";
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    if (e.target.id === "divide") {
        calculator.addSign("divide");
        calculator.divide(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "/";
        console.log(calculator.getResult(), calculator.getDisplay());
        return;
    }
    calculator.addToDisplay(e.target.id);
    displayRef.value = calculator.getDisplay();
    console.log(calculator.getResult(), calculator.getDisplay());
}
function calculateResult() { }
//# sourceMappingURL=index.js.map