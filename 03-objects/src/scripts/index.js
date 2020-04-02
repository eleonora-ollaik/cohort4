import {Account, AccountControl} from './accounts.js';

let accountManager = new AccountControl();

let addAccBtn = document.getElementById('addAccountBtn');

addAccBtn.addEventListener('click', () => {
    let accName = document.getElementById('accName').value;
    let startingBalance = document.getElementById('startBal').value;
    // console.log(accName);
    // console.log(startingBalance);

accountManager.addAccount(accName, startingBalance);
// alert(`Account '${accName}' with the balance of $${startingBalance} was created!`);
accName ='';
startingBalance='';
    console.log(accountManager.accArr);
})

