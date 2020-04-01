import {Account, AccountControl} from './accounts.js';


let addAccBtn = document.getElementById('addAccountBtn');

addAccBtn.addEventListener('click', () => {
    let accName = document.getElementById('accName').value;
    let startingBalance = document.getElementById('startBal').value;
    // console.log(accName);
    // console.log(startingBalance);
    let accountManager = new AccountControl.addAccount(accName, startingBalance);
    console.log(accountManager);
})

