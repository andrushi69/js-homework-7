const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length").length;

const validate = () => {
  if (input.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (input.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
  if (input.value.length > 6) {
    input.classList.add("invalid");
  }
};

input.addEventListener("change", validate)
