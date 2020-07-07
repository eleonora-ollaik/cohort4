import functions from './functions.js';
import calculator from './calculator.js';
import taxCalc from './tax-calculator.js';
import arrAndObj from './arraysAndObjects.js';


let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let button = document.getElementsByClassName('button')
let buttonC = document.getElementById('buttonC');
let num1 =0;
let num2 =0;
let idNumber = document.getElementById('idNumber');
let idNumberSize = document.getElementById('idNumberSize')



// **********
//
// Defining number size from input 
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


// Basic calculator inputs 

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

// Basic calculator operations

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
};

// Looping through buttons and operations

for (let i = 0; i <button.length; i++) {
    button[i].addEventListener('click', operation, false);
};

// Calculator clear button

if (buttonC) {
    buttonC.addEventListener('click', function () {
        console.log()
        num1Input.value = '';
        num2Input.value = '';
        document.getElementById('answer').value = '';
        window.location.href = '#calculator';
    });
};

//Tax Calculator
const onPressTax = document.getElementById("submit");
let income = document.getElementById('income');
let taxAmount = document.getElementById("incomeTax");

onPressTax.addEventListener("click", function () {
    taxAmount.value = taxCalc.federalTax(incomeInput.value);


} );


// Arrays 

let arr = [];
let array = document.getElementById('arrayInput');

// Array event listener

addButton.addEventListener('click', (() => {

  arrAndObj.addArr(arr, array.value);
  message.innerHTML = "Array added"
  
}));

showButton.addEventListener('click', (() => {
    message.innerHTML = arr;
}));

totalButton.addEventListener('click', (() => {
    let total = arrAndObj.totalArr(arr);
    message.innerHTML = total;

}));

clearButton.addEventListener('click', (() => {
    arr = [];
    message.innerHTML = 'Array is empty now!';
    array.value = '';
}));

// Dictionaries event listeners

dictEntry.addEventListener('click',  (() => {
    let result = arrAndObj.addCountryCapital(countryInput.value, capitalInput.value);
    console.log(arrAndObj.caps);
}));

codeLookup.addEventListener('click', (() => {
    let result = arrAndObj.getCountryCapital(codeInput.value);
    console.log(result);
}));
