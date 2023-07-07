const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value.trim();
  const password = formElement.password.value.trim();

  if (email === "" || password === "") {
    alert("Please,fill in all fields!");
  } else {
    const formAllData = {
      email,
      password,
    };
    console.log(formAllData);
    event.target.reset();
  }
}
