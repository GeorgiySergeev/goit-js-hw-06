const inpurRef = document.querySelector("#name-input");
console.log(inpurRef);
const spanRef = document.querySelector("#name-output");
console.log(spanRef.textContent);

function callback(event) {
  let textContainer = "";
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    textContainer = event.currentTarget.value;

    spanRef.textContent = textContainer;
  }
}

inpurRef.addEventListener("input", callback);
