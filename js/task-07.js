const inputRangeElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputRangeElement.addEventListener("input", handleEvent);

function handleEvent() {
    textElement.style.fontSize = `${Number(inputRangeElement.value)}px`;
    };