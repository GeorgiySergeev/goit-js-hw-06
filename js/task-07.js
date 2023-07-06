const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
spanRef.style.fontSize = "16px";

inputRef.addEventListener("input", onSlider);

function onSlider(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
