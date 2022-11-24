const cardFront = document.querySelector("#nmbrFront")
const cardNmbr = document.querySelector('#cardNmbr')
const form = document.querySelector('form')
const btn = document.querySelector("#confirm")
const nameInput = document.querySelector('#name')
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const cvc = document.querySelector("#CVC")
const cvcFront = document.querySelector(".cvcFront")
const mainForm = document.querySelector('.mainForm')
const success = document.querySelector('.formSubmit')
const cardName = document.querySelector('.cardName')
const cardDate = document.querySelector('.cardDate')
let cardnameText = cardName.innerText
let cardText = cardFront.innerText
let cvcText = cvcFront.innerText
let cardDateText = cardDate.innerText

function defaultValue(input, dispaly, dtext) {
    if (input.value === "") {
        dispaly.innerText = dtext;
    }
}
function numbersOnly(e) {
    (e.value === "") ? e.setCustomValidity('Enter number') : e.setCustomValidity('Wrong format. Numbers only.');
}

function validityCheck(e) {
    e.setCustomValidity('');
    e.checkValidity();
}
function cantBeBlank(e) {
    if (e.value === "") {
        e.setCustomValidity("Cannot be blank")
    }
}
cardNmbr.addEventListener("input", () => {

    let val1 = cardNmbr.value
    cardFront.innerText = `${val1.slice(0, 4)} ${val1.slice(4, 8)} ${val1.slice(8, 12)} ${val1.slice(12, 16)}`
    defaultValue(cardNmbr, cardFront, cardText)
    validityCheck(cardNmbr);
})

form.addEventListener('submit', (e) => {
    mainForm.classList.toggle("hidden")
    success.classList.toggle("succes")
    e.preventDefault();
})

cardNmbr.addEventListener("invalid", () => {
    numbersOnly(cardNmbr)
})
nameInput.addEventListener('input', () => {
    let name = nameInput.value
    cardName.innerText = name.toUpperCase();
    defaultValue(nameInput, cardName, cardnameText)
    validityCheck(nameInput);
})
nameInput.addEventListener("invalid", () => {
    cantBeBlank(nameInput);
})
month.addEventListener('input', () => {
    validityCheck(month);
    cardDate.innerText = `${month.value}/${year.value}`
    defaultValue(month, cardDate, cardDateText)
})
month.addEventListener("invalid", () => {
    cantBeBlank(month);
    numbersOnly(month)
})
year.addEventListener('input', () => {
    validityCheck(year);
    cardDate.innerText = `${month.value}/${year.value}`
    defaultValue(year, cardDate, cardDateText)
})
year.addEventListener("invalid", () => {
    cantBeBlank(year);
    numbersOnly(year)
})
cvc.addEventListener('input', () => {
    cvcFront.innerText = cvc.value
    defaultValue(cvc, cvcFront, cvcText)
    validityCheck(cvc);
})
cvc.addEventListener("invalid", () => {
    numbersOnly(cvc);
})