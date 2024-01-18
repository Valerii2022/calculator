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
        if (this.sign === "add") {
            this.currentResult =
                this.currentResult + this.currentResult * (percentage / 100);
        }
        if (this.sign === "subtract") {
            this.currentResult =
                this.currentResult - this.currentResult * (percentage / 100);
        }
        if (this.sign === "multiply") {
            this.currentResult = this.currentResult * (percentage / 100);
        }
        if (this.sign === "divide") {
            this.currentResult = this.currentResult / (percentage / 100);
        }
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
    console.log(displayRef.value);
    if (e.target === e.currentTarget || !(e.target instanceof HTMLElement)) {
        console.log(displayRef.value);
        return;
    }
    console.log(displayRef.value);
    if (e.target.id === "clear") {
        calculator.clearDisplay();
        calculator.clearResult();
        displayRef.value = "0";
        return;
    }
    if (e.target.id === "equal") {
        calculateResult();
        return;
    }
    if (e.target.id === "percent") {
        calculator.calculatePercentage(Number(calculator.getDisplay()));
        calculator.addSign("percent");
        return;
    }
    if (e.target.id === "toggle") {
        calculator.addSign("");
        calculator.toggleSign();
        displayRef.value = `-${calculator.getDisplay()}`;
        calculator.clearDisplay();
        calculator.addToDisplay(displayRef.value);
        return;
    }
    if (e.target.id === "add") {
        calculator.addSign("add");
        calculator.add(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "+";
        return;
    }
    if (e.target.id === "subtract") {
        calculator.addSign("subtract");
        calculator.subtract(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "-";
        return;
    }
    if (e.target.id === "multiply") {
        calculator.addSign("multiply");
        calculator.multiply(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "x";
        return;
    }
    if (e.target.id === "divide") {
        calculator.addSign("divide");
        calculator.divide(Number(calculator.getDisplay()));
        calculator.clearDisplay();
        displayRef.value = "/";
        return;
    }
    calculator.addToDisplay(e.target.id);
    displayRef.value = calculator.getDisplay();
}
function calculateResult() {
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
}
//# sourceMappingURL=index.js.map