const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", callback);

function callback(event) {
  spanRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    spanRef.textContent = "Anonymous";
  }
}
