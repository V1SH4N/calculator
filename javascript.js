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
            return operate(add, userNum1, userNum2);
        case '-':
            return operate(subtract, userNum1, userNum2);
        case '×':
            return operate(multiply, userNum1, userNum2);
        case '÷':
            return operate(divide, userNum1, userNum2);
    }
}


let displayValue = '';

const display = document.querySelector('#display');
const numbers = document.querySelector('#numbers');
const operators = document.querySelector('#operators');

let userNum1 = null;
let userNum2 = null;
let userOperator = null;
let ans = null;

numbers.addEventListener('mouseup', (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
})

operators.addEventListener('mouseup', (e) => {

    if (e.target.textContent === 'CLEAR'){
        userNum1 = null;
        userNum2 = null;
        userOperator = null;
        ans = null;
        displayValue = '';
        display.textContent = '0';
        return;
    }

    if (e.target.textContent !== '='){
        userOperator = e.target.textContent;
    }

    if (userNum1 === null) {
        userNum1 = +displayValue;
    }else{
        userNum2 = +displayValue;
        ans = handleOperation(userOperator);
        if (ans.toString().length > 12){
            ans = ans.toString().substr(1,12);
        }
        userNum1 = +ans;
        displayValue = ans;
        display.textContent = displayValue;
    }

    displayValue = ''; 
})




