const throttle = require('lodash.throttle');

const emailField = document.querySelector('.feedback-form input');
const messageField = document.querySelector('.feedback-form textarea');
const submitForm = document.querySelector('.feedback-form');


submitForm.addEventListener('input', throttle(submitFormInput, 500));
submitForm.addEventListener('submit', onSubmit);





updateFormFields();


function updateFormFields() {
    if (localStorage.getItem("feedback-form-state")) {
        const savedSettings = JSON.parse(localStorage.getItem("feedback-form-state"));
        emailField.value = savedSettings.email;
        messageField.value = savedSettings.message;
    }
}

function submitFormInput(e) {
    let userData = { email: "", message: "", };
    userData.email = emailField.value
    userData.message = messageField.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}


function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    submitForm.reset();
    localStorage.removeItem("feedback-form-state");
}

