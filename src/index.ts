const buttonsRef: HTMLElement | null = document.querySelector(".btn-wrapper");
let equalResult: string = "";

buttonsRef?.addEventListener("click", appendToResult);

function appendToResult(e: Event) {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }

  if (e.target.id === "clear") {
    clearResult();
    return;
  }
  if (e.target.id === "equal") {
    calculateResult();
    return;
  }
  equalResult += e.target.id;
  const resultElement = document.getElementById("result") as HTMLInputElement;
  resultElement.value = e.target.id;
}

function clearResult() {
  const resultElement = document.getElementById("result") as HTMLInputElement;
  resultElement.value = "";
}

function calculateResult() {
  try {
    const sanitizedResult = equalResult.replace(/[^-()\d/*+.]/g, "");
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = Function(
      '"use strict";return (' + sanitizedResult + ")"
    )();
  } catch (error) {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value = "Error";
  }
}
