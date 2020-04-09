import {Account, AccountControl, functions} from './accounts.js';

let accountManager = new AccountControl();
let i = 0;



let addAccBtn = document.getElementById('addAccountBtn');
let depAmount = document.getElementById('depositAmount');
let depBtn = document.getElementById('depositBtn');

//Creating new account


document.body.addEventListener('click', e => {

    // console.log('You clicked');
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    if (e.target.nodeName === 'BUTTON') {
        // console.log(e.target.textContent);
        if (e.target.textContent === 'Add Account') {
            let i = 0;
            console.log(accountManager.accArr)
            // console.log(accName.value)
            accountManager.addAccount(accName.value, Number(startBal.value));
            functions.buildCard(accName.value, Number(startBal.value));
            i++;
        } else if (e.target.textContent === 'Deposit') {
            console.log(depAmount.value);
            accountManager.accArr[0].deposit(depAmount.value);
            console.log(accountManager.accArr);
        }

        // else if (e.target.textContent === 'Add After') {
        //     functions.addAfter(e.target.parentElement, 'Card ' + counter++);
        // }

        // else if (e.target.textContent === 'Remove') {
        //     functions.removeFunction(e.target.parentElement);
        // }
    }
})







// addAccBtn.addEventListener('click', () => {
//     let accName = document.getElementById('accName').value;
//     let startingBalance = document.getElementById('startBal').value;
//     // console.log(accName);
//     // console.log(startingBalance);

// accountManager.addAccount(accName, startingBalance);
// accountManager.buildCard();
// // accName.value ='';
// // startingBalance.value='';
//     console.log(accountManager.accArr);
// })


// Depositing Money


depBtn.addEventListener('click', () => {
    
})
// document.body.addEventListener('click', e => {
//     if (e.target.nodeName === 'LI') {
//         var string = e.target.textContent;
//         var numbers = string.match(/\d+/g).map(Number);
//         console.log(numbers)
//         accountManager.accArr[i].deposit(depAmount)
// }});
