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

let a = 2;
let b = 3;
let op = 1;

console.log(operate(a, b, op));
