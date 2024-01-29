
const categoriesList = document.querySelectorAll('ul#categories > li.item');

console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {

  const categoryName = category.querySelector('h2').textContent;

  const subcategoriesList = category.querySelectorAll('ul > li');

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів у категорії ${categoryName}: ${subcategoriesList.length}`);
});
