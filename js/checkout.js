const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");
const cardHolder = document.querySelector("#cardHolder");
const cardHolderError = document.querySelector("#cardHolderError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const expiryDate = document.querySelector("#expiryDate");
const expiryDateError = document.querySelector("#expiryDateError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 1) === true) {
        fullNameError.style.display ="none";
    } else {
        fullNameError.style.display ="block";
    }
    if(checkLength(address.value, 10) === true) {
        addressError.style.display ="none";
    } else {
        addressError.style.display ="block";
    }
    if(checkLength(postalCode.value, 3) === true) {
        postalCodeError.style.display ="none";
    } else {
        postalCodeError.style.display ="block";
    }
    if(checkLength(cardHolder.value, 1) === true) {
        cardHolderError.style.display ="none";
    } else {
        cardHolderError.style.display ="block";
    }
    if(checkLength(cardNumber.value, 15) === true) {
        cardNumberError.style.display ="none";
    } else {
        cardNumberError.style.display ="block";
    }
    if(checkLength(expiryDate.value, 3) === true) {
        expiryDateError.style.display ="none";
    } else {
        expiryDateError.style.display ="block";
    }
    if(checkLength(cvc.value, 2) === true) {
        cvcError.style.display ="none";
    } else {
        cvcError.style.display ="block";
    }
    if(validateEmail(email.value)) {
        emailError.style.display ="none";
    } else {
        emailError.style.display ="block";
    }
}

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
