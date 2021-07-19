const navUl = document.querySelectorAll("#categories > .item");
console.log(`В списке ${navUl.length} категории`);

const items = document.querySelectorAll(".item");
const navList = document.querySelectorAll("#categories .item > ul ");

Array.prototype.forEach.call(items, (element) => {
  const navTitle = element.querySelector("h2").textContent;
  const navItemsLength = element.querySelectorAll("li").length;

  console.log(`Категория: ${navTitle} ,
   Количество элементов: ${navItemsLength}`);
});
  