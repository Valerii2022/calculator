const buttonsRef = document.querySelector(".btn-wrapper");

buttonsRef?.addEventListener("click", appendToResult);

function appendToResult(e) {
  if (e.target.id === "clear") {
    clearResult();
    return;
  }
  if (e.target.id === "equal") {
    calculateResult();
    return;
  }
  document.getElementById("result").value += e.target.id;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const result = document.getElementById("result").value;
  try {
    const sanitizedResult = result.replace(/[^-()\d/*+.]/g, "");
    document.getElementById("result").value = Function(
      '"use strict";return (' + sanitizedResult + ")"
    )();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
