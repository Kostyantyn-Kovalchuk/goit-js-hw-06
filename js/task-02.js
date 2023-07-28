"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.querySelector("#ingredients");

function createMarkup(arr) {
  const markup = arr.map(element => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = element;
    listItemEl.classList.add("item");
    return listItemEl;
  });
  ingredientsListElement.append(...markup);
}

createMarkup(ingredients);