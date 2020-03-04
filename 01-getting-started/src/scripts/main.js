import functions from './functions.js';
import calculator from './calculator.js';

let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let button = document.getElementsByClassName('button')
let buttonC = document.getElementById('buttonC');
let num1 =0;
let num2 =0;

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


if (num1Input) {
    num1Input.addEventListener('input', updateNum1);
    function updateNum1(event) {
        num1 = Number(event.target.value);
    }
}

if (num2Input) {
    num2Input.addEventListener('input', updateNum2);
    function updateNum2(event) {
        num2 = Number(event.target.value);
    }
}

const operation = (clickObj) => {
    let operator =clickObj.target.value;
    switch (operator) {
        case '+':
            document.getElementById("answer").value = calculator.add(num1, num2);
            break;
        case '-':
            document.getElementById("answer").value = calculator.substract(num1, num2);
            break;
        case '*':
            document.getElementById("answer").value = calculator.multiply(num1, num2);
            break;
        case '/':
            document.getElementById("answer").value = calculator.divide(num1, num2);
            break;

        default:
            return 'error';
            break;
            
    }
}

for (let i = 0; i <button.length; i++) {
    button[i].addEventListener('click', operation, false);
};

// buttonC.addEventListener('click', calculator.erase);

if (buttonC) {
    buttonC.addEventListener('click', function () {
        console.log()
        num1Input.value = '';
        num2Input.value = '';
        document.getElementById('answer').value = '';
        window.location.href = '#calculator';
    });
}