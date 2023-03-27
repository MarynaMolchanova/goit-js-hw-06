const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

for (let item of categories) {
  console.log("");
  console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
