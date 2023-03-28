let inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkNumbers);

function changeStyles(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

function checkNumbers(name) {
  if (this.value.length >= 6) {
    changeStyles(inputEl, "invalid", "valid");
  } else {
    changeStyles(inputEl, "valid", "invalid");
  }
}
