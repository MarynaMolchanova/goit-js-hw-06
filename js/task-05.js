const inputEl = document.querySelector("#name-input");
let spanEl = document.querySelector("#name-output");

function checkName(name) {
  if (this.value.length > 0) {
    spanEl.textContent = this.value;
  } else {
    spanEl.textContent = "Anonimus";
  }
}

inputEl.addEventListener("input", checkName);
