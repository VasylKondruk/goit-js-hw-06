const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const liElements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);

  const liEl = document.createElement('li');
  liEl.textContent = ingredients[i];
  liEl.classList.add('item');

  liElements.push(liEl);
}

ingredientsEl.append(...liElements);
