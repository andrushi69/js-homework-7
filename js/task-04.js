let counterValue = 0;

const button = {
  minus: document.querySelector("[data-action='increment']"),
  plus: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
}
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
}

button.minus.addEventListener("click", increment);
button.plus.addEventListener("click", decrement);
