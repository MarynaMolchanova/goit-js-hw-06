function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpanEl = document.querySelector("span.color");
const btnChangeColor = document.querySelector("button.change-color");

function changeColor(colors) {
  body.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = getRandomHexColor();
}

btnChangeColor.addEventListener("click", changeColor);
