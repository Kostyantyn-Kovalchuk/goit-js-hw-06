"use strict";

const inputFieldElement = document.querySelector("#name-input");
const displayedNameElement = document.querySelector("#name-output");

inputFieldElement.addEventListener("input", handleEvent);

function handleEvent(event) {
    if (inputFieldElement.value !== "") {
        displayedNameElement.textContent = event.currentTarget.value;
    } else {
        displayedNameElement.textContent = "Anonymous";
    }
};
