// let expression: string = "";
// let result: number = 0;
// let operator: string = "";

// const refs: any = {
//   wrapper: document.querySelector(".btn-wrapper"),
//   display: document.querySelector(".display"),
// };

// refs.wrapper.addEventListener("click", calculate);

// function calculate(e) {
//   if (Number(e.target.textContent)) {
//     expression += e.target.textContent;
//     refs.display.value = expression;
//   }
//   if (e.target.textContent === "+") {
//     operator === "+";
//     result = Number(expression);
//     expression = "";
//   }
//   if (e.target.textContent === "-") {
//     operator === "-";
//     result = Number(expression);
//     expression = "";
//   }
//   if (e.target.textContent === "=") {
//     if (operator === "+") {
//       result += Number(expression);
//     }
//     if (operator === "-") {
//       result -= Number(expression);
//     }
//     refs.display.value = result;
//     expression = "";
//   }
//   if (e.target.textContent === "C") {
//     expression = "";
//     result = 0;
//     operator = "";
//     refs.display.value = "";
//   }
// }
