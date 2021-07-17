const mainDiv = document.getElementById("controls");
const render = mainDiv.querySelector(`[data-action="render"]`);
const clear = mainDiv.querySelector(`[data-action="destroy"]`);
render.addEventListener("click", getAmount);
clear.addEventListener("click", clearBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const defaultSizeBoxes = 30;
  const fragment = document.createDocumentFragment();

  for (var i = 0; i < amount; i++) {
    const size = defaultSizeBoxes + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    background-color: rgba( ${random()} , ${random()} , ${random()} )`;

    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

function clearBoxes() {
  boxes.textContent = "";
}

function random() {
  return Math.floor(Math.random() * 200);
}
