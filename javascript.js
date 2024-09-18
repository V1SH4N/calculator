function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if (num2 === 0){
        return "Nice try nigga.";
    }
    return num1/num2;
}
function initializeVariable(){
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    displayValue = '';
}
function operate(operator, num1, num2){
    return operator(num1, num2);
}
function handleOperation(userOperator){
    switch (userOperator){
        case '+':
            return operate(add, num1, num2);
        case '-':
            return operate(subtract, num1, num2);
        case '×':
            return operate(multiply, num1, num2);
        case '÷':
            return operate(divide, num1, num2);
    }
}

const display = document.querySelector('#display');
const numbers = document.querySelector('#numbers');
const operators = document.querySelector('#operators');

let displayValue;
let num1;
let num2;
let operator;
let result;

let operatorEntered = false;

initializeVariable();

numbers.addEventListener('mouseup', (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
})


operators.addEventListener('mouseup', (e) => {
    if (!operatorEntered){
        num1 = +displayValue;
        displayValue = ''
    }else if(operator !== '=' && displayValue !== '') {
        num2 = +displayValue;
        displayValue = '';
        result = handleOperation(operator);
        num1 = result;
        displayValue = result;
        display.textContent = displayValue;
        operatorEntered = false;
    }
    displayValue = '';
    operator = e.target.textContent;
    operatorEntered = true;
})





