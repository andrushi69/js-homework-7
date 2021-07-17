const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const mainList = document.getElementById("ingredients");
console.log(mainList);

const allIngredients = ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  mainList.appendChild(items);
});

console.log(ingredients);
