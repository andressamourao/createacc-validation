// Validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("cfrm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  // add error message inside small
  formControl.querySelector("small").innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.querySelector("small").innerText = message;
  formControl.className = "form-control success";
}

function validate() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (!usernameValue) {
    // show error
    // add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (!emailValue) {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (!passwordValue) {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (!password2Value) {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do no match");
  } else {
    setSuccessFor(password2);
  }
}

function showPassword() {
  if (password.type === "password") {
    document.getElementById("toggleEye").style.opacity = "100%";
    password.type = "text";
  } else {
    document.getElementById("toggleEye").style.opacity = "40%";
    password.type = "password";
  }
}

function showPassword2() {
  if (password2.type === "password") {
    document.getElementById("toggleEye2").style.opacity = "100%";
    password2.type = "text";
  } else {
    document.getElementById("toggleEye2").style.opacity = "40%";
    password2.type = "password";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
