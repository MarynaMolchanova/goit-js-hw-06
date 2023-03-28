let inputEl = document.querySelector("#font-size-control");
let spanEl = document.querySelector("#text");

inputEl.addEventListener("input", changeFontSize);

function changeFontSize(name) {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
