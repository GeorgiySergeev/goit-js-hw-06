const inputRef = document.getElementById("validation-input");

const checkedLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onFocusInput);

function onFocusInput(event) {
  if (event.currentTarget.value.length < checkedLength) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
