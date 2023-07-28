"use strict"

let counterValue = 0;

const counter = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener("click", decreaseValue);
buttonIncrement.addEventListener("click", increaseValue);



function decreaseValue() {
    counterValue -= 1;
    counter.textContent = counterValue;
};

function increaseValue() {
    counterValue += 1;
    counter.textContent = counterValue;
};

