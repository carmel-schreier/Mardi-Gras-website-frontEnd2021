const inputsLine = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;

    parent.classList.remove("focus")
}

function inputFunc() {
    let parent = this.parentNode;

    parent.classList.add("stay-focus")
}

inputsLine.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("input", inputFunc);

    input.addEventListener("blur", blurFunc);

})




const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');
const thankYou = document.querySelector('.thank-you')
const form = document.querySelector('form');
const inputs = [nameInput, emailInput, phoneInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove("invalid")
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => {
    elm.nextElementSibling.classList.remove("hidden");
    elm.classList.add("invalid")
}

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;

    inputs.forEach(resetElm);

    //resetInput(nameInput);
    //resetInput(emailInput);
    //resetInput(phoneInput);
    //resetInput(messageInput);

    if (!nameInput.value) {
        invalidateElm(nameInput);
        isFormValid = false;
    };
    if (!isValidEmail(emailInput.value)) {
        invalidateElm(emailInput);
        isFormValid = false;
    };

    if (!isValidPhone(phoneInput.value)) {
        invalidateElm(phoneInput);
        isFormValid = false;
    };
    if (!messageInput.value) {
        invalidateElm(messageInput);
        isFormValid = false;
    };
};


form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("i am hear")
    isValidationOn = true;
    validateInputs();
    if (isFormValid == true) {
        form.reset()
        form.remove();
        thankYou.classList.remove("hidden");
    }
});


inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInputs();
    })
});