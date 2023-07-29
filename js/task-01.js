const complexListElement = document.querySelector('#categories');

console.log(`Number of categories: ${complexListElement.children.length}`);

const complexListItemElement = document.querySelectorAll(".item");

complexListItemElement.forEach(function (element, index) {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
