const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
// console.log(list);
const markup = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  return liItem
  // console.dir(liItem);
});
// console.log(markup);
list.append(...markup)
// console.log(list);