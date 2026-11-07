//------------ФУНКЦИИ-----------
function convertTemperature(celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9
    }
}
console.log(convertTemperature(100, true))

function validatePassword(password) {
    const length = password.length >= 8;
    const letters = /[a-zA-Z]/.test(password);
    const numbers = /[0-9]/.test(password);

    return length && letters && numbers;
};
console.log(validatePassword("hello123"))

function calculate(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (a === 0 || b === 0) {
            return "На ноль не делится!"
        }
        return a / b;
    } else {
        return "Неизвестная операция"
    }
}
console.log(calculate(16, 2, "/"))

//-------------DOM------------------
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const results = document.getElementById("result")
const buttons = document.querySelectorAll(".operation-btn")

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (num1.value.trim() === "" || num2.value.trim() === "") {
            return;
        }
        const a = Number(num1.value)
        const b = Number(num2.value)
        const operation = button.dataset.operation
        const result = calculate(a, b, operation)
        
        results.textContent = result 
    })
})