"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const textElement = document.querySelector(".color");
const webpageBodyElement = document.querySelector("body");

buttonElement.addEventListener("click", handleClick);

function handleClick() {
  webpageBodyElement.style.backgroundColor= getRandomHexColor();
  textElement.textContent = getRandomHexColor();
};

console.log(webpageBodyElement);