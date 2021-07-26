const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulList = document.getElementById("ingredients");
const ingredientsList = createUlList(ingredients);
ulList.append(...ingredientsList);

function createUlList(items) {
  return items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
}
