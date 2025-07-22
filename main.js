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

function operate(a, b, op) {
    switch (op) {
        case 'add':
            return add(a, b);
        case 'sub':
            return subtract(a, b);
        case 'multi':
            return multiply(a, b);
        case 'div':
            return divide(a, b);
    }
}

function onClick(buttonID) {
    // gets type and value of input from id
    inputList = buttonID.split('_')
    inputType = inputList[0];
    
    inputType == 'int' ? inputValue = parseInt(inputList[1], 10) : inputValue = inputList[1];
    console.log(inputValue + " " + inputType) 

    // if (inputType == 'op')  || (inputValue == )
}

let firstInt = false;
let action = false;
let secondInt = false;

let a = 2;
let b = 3;
let op = 'add';

// runs the display output
const display = document.querySelector(".display");
let displayString = '0';
display.textContent = displayString;

// gets node list of all buttons on the page
const buttons = document.querySelectorAll("button");
// sets uo event listeners on each button
buttons.forEach((button) => {
    button.addEventListener("click",() => onClick(button.id));
})

console.log(operate(a, b, op));
