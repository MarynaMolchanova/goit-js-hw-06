let counterValue = 0;
const buttons = document.querySelectorAll("button");
const resultlEl = document.querySelector("#value");

for (const button of buttons) {
  button.addEventListener("click", changeCount);
}

function changeCount() {
  const functionButton = this.dataset.action;
  switch (functionButton) {
    case "decrement":
      counterValue -= 1;
      break;
    case "increment":
      counterValue += 1;
      break;
  }
  resultlEl.textContent = counterValue;
}
