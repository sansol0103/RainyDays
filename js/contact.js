const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phoneNumber = document.querySelector("#number");
const phoneNumberError = document.querySelector("#numberError");
const message = document.querySelector("#subject");
const messageError = document.querySelector("#subjectError");
const button = document.querySelector("button");
const successMessage = document.querySelector("#success-message")

function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 1) === true) {
        fullNameError.style.display ="none";
    } else {
        fullNameError.style.display ="block";
    }
    if(checkLength(message.value, 10) === true) {
        messageError.style.display ="none";
    } else {
        messageError.style.display ="block";
    }
    if(checkLength(phoneNumber.value, 10) === true) {
        phoneNumberError.style.display ="none";
    } else {
        phoneNumberError.style.display ="block";
    }
    if(validateEmail(email.value)) {
        emailError.style.display ="none";
    } else {
        emailError.style.display ="block";
    }


}

// function checkIfButtonIsDisabled() {
//     if (checkLength(fullName.value === true) && checkLength(message.value === true) && validateEmail(email.value) && checkLength(phoneNumber.value === true)) {
//         button.disabled = false;
//     } else {
//         message.innerHTML = "";
//         button.disabled = true;
//     }
// }

// fullName.addEventListener("keyup", checkIfButtonIsDisabled);
// message.addEventListener("keyup", checkIfButtonIsDisabled);
// phoneNumber.addEventListener("keyup", checkIfButtonIsDisabled);
// email.addEventListener("keyup", checkIfButtonIsDisabled);

// function submitForm(formSubmit) {
//     formSubmit.preventDefault();
//     successMessage.innerHTML = `<div class="success-message">Your message has been sent</div>`
//     form.reset();
// }

// form.addEventListener("submit", submitForm);

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
