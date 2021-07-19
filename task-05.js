const input = document.getElementById("name-input");

const output = document.getElementById("name-output");

input.oninput = () => {
  if (input.value === "") {
    output.textContent = ("незнакомец");
  } else {
    output.textContent = input.value;
  }
};
