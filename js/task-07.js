const inputRange = document.getElementById("font-size-control");

const editFontSize = () => {
  const spanEl = document.getElementById("text");
  spanEl.style.fontSize = `${inputRange.value}px`;
};
inputRange.addEventListener("change", editFontSize);
