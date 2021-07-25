const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const mainUlList = document.querySelector("#ingredients")
const ulList = document.createElement("ul");
ulList.setAttribute("id", "ingredients");
ulList.setAttribute("style", "list-style-type: none; padding: 0;");


console.log(ulList);

let i = []

for (i = 0; i <= ingredients.length - 1; i++) {
  const li = document.createElement("li"); 
  li.innerHTML = ingredients[i]; 

  ulList.appendChild(li);
}

mainUlList.appendChild(ulList);      
