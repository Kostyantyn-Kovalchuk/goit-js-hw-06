"use strict";

const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", handleEvent);

function handleEvent() {
    if (inputElement.value.length === parseInt(inputElement.getAttribute('data-length'), 10)) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
    } else {
        inputElement.classList.add("invalid");        
        inputElement.classList.remove("valid");
    }
};

