const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  const formAllData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert ("Please,fill in all fields!");
  } else {
    console.log(formAllData);
    formRef.reset();
  }
};
