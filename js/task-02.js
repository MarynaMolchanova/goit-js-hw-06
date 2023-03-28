const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const items = ingredients.map((text) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = text;

  return itemEl;
});

list.append(...items);
