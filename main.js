function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, c) {
    switch (c) {
        case 1:
            return add(a, b);
        case 2:
            return subtract(a, b);
        case 3:
            return multiply(a, b);
        case 4:
            return divide(a, b);
    }
}

function clickHandler(buttonID) {
    console.log(buttonID);
}



let a = 2;
let b = 3;
let op = 1;

// runs the display output
const display = document.querySelector(".display");
let displayString = '0';
display.textContent = displayString;

// gets node list of all buttons on the page
const buttons = document.querySelectorAll("button");
// sets uo event listeners on each button
buttons.forEach((button) => {
    button.addEventListener("click",() => clickHandler(button.id));
})

console.log(operate(a, b, op));
