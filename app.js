// inputs
const submit = document.querySelector(".submit");
const firstname = document.querySelector(".first-name-input");
const lastname = document.querySelector(".last-name-input");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");

// errors
const firstError = document.querySelector(".first-error");
const lastError = document.querySelector(".last-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

// alerts
const firstAlert = document.querySelector(".first-alert");
const lastAlert = document.querySelector(".last-alert");
const emailAlert = document.querySelector(".email-alert");
const passwordAlert = document.querySelector(".password-alert");

const checkIfEmpty = (e, errMsg, alert) => {
  if (e.value === "") {
    e.style.outline = "0.2rem solid #ff7979";
    errMsg.style.display = "block";
    alert.style.display = "block";
  } else {
    e.style.outline = "none";
    errMsg.style.display = "none";
    alert.style.display = "none";
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();

  checkIfEmpty(firstname, firstError, firstAlert);
  checkIfEmpty(lastname, lastError, lastAlert);
  checkIfEmpty(password, passwordError, passwordAlert);
  checkIfEmpty(email, emailError, emailAlert);
});
