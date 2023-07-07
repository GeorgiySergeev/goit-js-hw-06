let counterValue = 0;
const span = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function onDecrementBtnClick() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  span.textContent = counterValue;
}

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
