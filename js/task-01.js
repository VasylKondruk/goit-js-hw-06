const ulCategories = document.querySelector('#categories');
console.log(`Number of categories: ${ulCategories.children.length}`);

const liCategories = document.querySelectorAll('.item');

for (let i = 0; i < liCategories.length; i += 1) {
  const category = liCategories[i].firstElementChild.textContent;
  const elements = liCategories[i].lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
}
