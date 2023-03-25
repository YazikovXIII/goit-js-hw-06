// console.log("Hello world");

const list = document.querySelector("#categories");
// console.log(list);

const categories = list.children;
console.log("Number of categories :", categories.length);

[...categories].forEach(category =>
    console.log(`\nCategory: ${category.firstElementChild.textContent}
    \nElements: ${category.lastElementChild.children.length}`));
