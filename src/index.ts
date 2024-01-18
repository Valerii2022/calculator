class Calculator {
  private currentResult: number = 0;
  private isNegative: boolean = false;
  private display: string = "";
  private sign: string = "";

  addSign(sign: string) {
    this.sign = sign;
  }

  getSign(): string {
    return this.sign;
  }

  addToDisplay(string: string) {
    this.display += string;
  }

  clearDisplay(): void {
    this.display = "";
  }

  getDisplay(): string {
    return this.display;
  }

  add(number: number): void {
    this.currentResult += this.isNegative ? -number : number;
    this.sign = "add";
  }

  subtract(number: number): void {
    if (this.currentResult === 0) {
      this.currentResult = number;
    } else {
      this.currentResult -= this.isNegative ? -number : number;
    }
  }

  multiply(number: number): void {
    if (this.currentResult === 0) {
      this.currentResult = number;
    } else {
      this.currentResult *= this.isNegative ? -number : number;
    }
  }

  divide(number: number): void {
    if (this.currentResult === 0) {
      this.currentResult = number;
    } else {
      this.currentResult /= this.isNegative ? -number : number;
    }
  }

  toggleSign(): void {
    if (this.currentResult !== 0) {
      this.currentResult = -this.currentResult;
    }
    this.isNegative = !this.isNegative;
  }

  calculatePercentage(percentage: number): void {
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

  getResult(): number {
    return this.currentResult;
  }

  clearResult() {
    this.currentResult = 0;
  }
}

const calculator = new Calculator();

const buttonsRef = document.querySelector(".btn-wrapper") as HTMLInputElement;
const displayRef = document.getElementById("result") as HTMLInputElement;

buttonsRef.addEventListener("click", appendToResult);

displayRef.value = "0";

function appendToResult(e: Event) {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }
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

  calculator.addToDisplay(e.target.id as string);
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
