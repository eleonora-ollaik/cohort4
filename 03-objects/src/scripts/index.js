import {Account, AccountControl} from './accounts.js';

let accountManager = new AccountControl();

let addAccBtn = document.getElementById('addAccountBtn');

//Creating new account

addAccBtn.addEventListener('click', () => {
    let accName = document.getElementById('accName').value;
    let startingBalance = document.getElementById('startBal').value;
    // console.log(accName);
    // console.log(startingBalance);

accountManager.addAccount(accName, startingBalance);
// accName.value ='';
// startingBalance.value='';
    console.log(accountManager.accArr);
})


// Depositing Money

let depAmount = document.getElementById('depositAmount').value;
let depBtn = document.getElementById('depositBtn');


depBtn.addEventListener('click', () => {
    
})
document.body.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
        var string = e.target.textContent;
        var numbers = string.match(/\d+/g).map(Number);
        console.log(numbers)
        accountManager.accArr[i].deposit(depAmount)
}});
