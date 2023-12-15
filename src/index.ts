let expression = "";
let result = 0;
let operator;

const refs: any = {
  wrapper: document.querySelector(".btn-wrapper"),
  display: document.querySelector(".display"),
};

refs.wrapper.addEventListener("click", calculate);

function calculate(e) {
  if (Number(e.target.textContent)) {
    expression += e.target.textContent;
    refs.display.value = expression;
  }
  if (e.target.textContent === "+") {
    operator === "+";
    result = Number(expression);
    expression = "";
  }
  if (e.target.textContent === "=") {
    result += Number(expression);
    refs.display.value = result;
  }
}
