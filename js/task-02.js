const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");

function createItem(text) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = text;
  return itemEl;
}

const items = ingredients.map(createItem);
list.append(...items);
