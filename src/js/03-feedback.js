const throttle = require('lodash.throttle');

const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');
const submitForm = document.querySelector('.feedback-form');

emailField.addEventListener('input', throttle(onEmailInput, 500));
messageField.addEventListener('input', throttle(onMessageInput, 500));
submitForm.addEventListener('submit', onSubmit);


let userData = { email: "", message: "", };


updateFormFields()


function updateFormFields() {
    if (localStorage.getItem("feedback-form-state")) {
        const savedSettings = JSON.parse(localStorage.getItem("feedback-form-state"));
        const savedEmail = savedSettings.email;
        const savedMessage = savedSettings.message;
        emailField.value = savedEmail;
        messageField.value = savedMessage;
    }
}


function onEmailInput(e) {
    userData.email = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
    
}


function onMessageInput(e) {
    userData.message = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}


function onSubmit(e) {
    e.preventDefault();
    submitForm.reset();
    console.log(userData);
    localStorage.removeItem("feedback-form-state");
}

