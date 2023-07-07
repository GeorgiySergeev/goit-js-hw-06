const inputRef = document.getElementById("validation-input");
const checkedLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onFocusInput);

function classSelect(valA, valB) {
  inputRef.classList.remove(valA);
  inputRef.classList.add(valB);
}

function onFocusInput(event) {
  if (event.currentTarget.value.length === checkedLength) {
    classSelect("invalid", "valid");
  } else {
    classSelect("valid", "invalid");
  }
}
