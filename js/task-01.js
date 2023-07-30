const categoriesElems = document.querySelectorAll('.item');

console.log(categoriesElems.length);

categoriesElems.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
});