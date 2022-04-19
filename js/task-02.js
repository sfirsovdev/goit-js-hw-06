const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementUl = document.querySelector('ul');
const markup = ingredients.map(elem => {
  const elementLi = document.createElement('li');
  elementLi.textContent = elem;
  elementLi.classList.add('item');
  return elementLi;
});
elementUl.append(...markup);