const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map((el) => {
  const liEl = document.createElement("li");

  liEl.classList.add("item");
  liEl.textContent = el;

  return liEl;
});

document.querySelector("#ingredients").append(...list);
