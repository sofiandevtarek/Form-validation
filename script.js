const form = document.getElementById("contactForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}

function showErrorTextArea(textarea, message) {
  const formControl = textarea.parentElement;
  formControl.className = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}

function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

function successTextArea(textarea) {
  const formControl = textarea.parentElement;
  formControl.className = "form-control";
}

form.addEventListener("submit", function (e) {
  // e.preventDefault();
  if (username.value.trim() === "") {
    showError(username, "Username is required");
  } else {
    success(username);
  }
  if (email.value.trim() === "") {
    showError(email, "Email is required");
  } else {
    success(email);
  }
  if (password.value.trim() === "") {
    showError(password, "Password is required");
  } else {
    success(password);
  }
  if (message.value.trim() === "") {
    showError(message, "Please write your message" );
  } else {
    success(message);
  }
});
