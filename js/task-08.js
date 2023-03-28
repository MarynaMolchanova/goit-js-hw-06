const form = document.querySelector("form.login-form");

function onFormSubmit(event) {
  const formElements = event.currentTarget.elements;
  //   console.log(formElements);
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("Всі поля форми повинні бути заповнені!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    form.reset();
  }

  event.preventDefault();
}

form.addEventListener("submit", onFormSubmit);
