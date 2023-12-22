const buttonsRef = document.querySelector(".btn-wrapper");
let equalResult = "";
buttonsRef === null || buttonsRef === void 0 ? void 0 : buttonsRef.addEventListener("click", appendToResult);
function appendToResult(e) {
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
    const resultElement = document.getElementById("result");
    resultElement.value = e.target.id;
}
function clearResult() {
    const resultElement = document.getElementById("result");
    resultElement.value = "";
}
function calculateResult() {
    try {
        const sanitizedResult = equalResult.replace(/[^-()\d/*+.]/g, "");
        const resultElement = document.getElementById("result");
        resultElement.value = Function('"use strict";return (' + sanitizedResult + ")")();
    }
    catch (error) {
        const resultElement = document.getElementById("result");
        resultElement.value = "Error";
    }
}
//# sourceMappingURL=index.js.map