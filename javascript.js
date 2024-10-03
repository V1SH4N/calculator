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
function resetVariables(){
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    displayValue = '';
    operatorEntered = false;
    decimalEntered = false;
    display.textContent = '0';
}
function resetOpacity(){
    let operatorsArray = [...operators.children];
    operatorsArray.forEach(operator => {
        operator.style.opacity = 1;
    });
}


const display = document.querySelector('#display');
const numbers = document.querySelector('#numbers');
const operators = document.querySelector('#operators');

const maxLength = 12;
let displayValue;
let num1;
let num2;
let operator;
let result;
let operatorEntered;
let decimalEntered;

resetVariables();

numbers.addEventListener('mouseup', (e) => {
    if (e.target.textContent === '.'){
        if (decimalEntered) return;
        else decimalEntered = true;
    }
    if (displayValue.length <= maxLength){
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    }
})


operators.addEventListener('mouseup', (e) => {
    if (e.target.textContent === 'CLEAR'){
        resetVariables();
        return;
    }
    if (e.target.textContent == '⌫'){
        displayValue = displayValue.substr(0, displayValue.length - 1);
        if (displayValue === '') displayValue = '0';
        display.textContent = displayValue;
        return;
    }

    if (!operatorEntered && displayValue !== ''){
        num1 = +displayValue;
        decimalEntered = false;
        displayValue = '';
    }else if (displayValue !== ''){
        num2 = +displayValue;
        decimalEntered = false;
        displayValue = '';
        result = handleOperation(operator);
        resetOpacity();
        num1 = result;
        displayValue = result.toString();
        if (displayValue.length >= 13){
            displayValue = displayValue.slice(0, maxLength);
        }
        display.textContent = displayValue;
        operatorEntered = false;
    }

    displayValue = '';
    if (e.target.textContent !== '='){
        e.target.style.opacity = .5;
        operator = e.target.textContent;
        operatorEntered = true;
    }
})





