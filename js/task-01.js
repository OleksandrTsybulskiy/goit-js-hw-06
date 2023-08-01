const categoriesElems = document.querySelectorAll('.item');

console.log("Number of cathegories:", categoriesElems.length);

categoriesElems.forEach((item) => {
    console.log("Cathegory:", item.firstElementChild.textContent);
    console.log("Cathegory's elements:", item.lastElementChild.children.length);
});