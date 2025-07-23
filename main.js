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
    if (b === 0) return null;
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

function resetCalc() {
    firstInt = false;
    action = false;
    secondInt = false;
    newCalc = true;

    a = 0;
    b = 0;
    op = '';

    displayString = '0';
    display.textContent = displayString;
}

function onClick(buttonID) {
    // gets type and value of input from id
    inputList = buttonID.split('_')
    inputType = inputList[0];
    inputType == 'int' ? inputValue = parseInt(inputList[1], 10) : inputValue = inputList[1];

    if (inputValue === 'clear') resetCalc();

    if (inputType == 'int') {
        if (!firstInt && !action && !secondInt && newCalc)
        {
            a = inputValue;
            firstInt = true;
            displayString = `${inputValue} `;
            display.textContent = displayString;
            return  
        }
        if (firstInt && !action && !secondInt && newCalc)
        {
            a = parseInt((String(a) + String(inputValue)), 10);
            displayString = `${a} `;
            display.textContent = displayString;
            return  
        }
        if (action === true && secondInt === false) {
            b = inputValue;
            secondInt = true;
            displayString += `${inputValue}`;
            display.textContent = displayString;
            return  
        }
        if (firstInt && action && secondInt) {
            b = parseInt((String(b) + String(inputValue)), 10);
            displayString = displayString.slice(0, -1) + b;
            display.textContent = displayString;
            return  
        }
    }

    if (inputType == 'op') {
        if (firstInt === true && secondInt === false) {
            op = inputValue;
            action = true;
            displayString += `${document.getElementById(buttonID).textContent} `;
            display.textContent = displayString;
            return  
        }
    }

    if (inputValue == 'equals' && firstInt && action && secondInt) {
        sum = operate(a, b, op);
        displayString = `${sum}`;
        display.textContent = displayString;
        a = sum;
        firstInt = true;
        action = false;
        secondInt = false;
        newCalc = false;
    }
}

let firstInt = false;
let action = false;
let secondInt = false;
let newCalc = true;

let a = 0;
let b = 0;
let op = '';

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