import { Card } from './accounts.js';
import { AccountControl } from './accounts.js';

let accountManager = new AccountControl();
let selectedKey;
const bigName = document.getElementById('largest');
const smallName = document.getElementById('smallest');
const totalFunds = document.getElementById('total');


//Adding new account


document.body.addEventListener('click', e => {

    const el = e.target;
    const key = el.getAttribute('key');
    let accList = document.getElementById("idAccountsList");
    let depAmount = document.getElementById('depositAmount').value;
    let withdrAmount = document.getElementById('withdrawalAmount').value;
    const todo = el.getAttribute('todo')
    const account1 = document.getElementById('accountName');

//Selecting active account

    if (key) {
        let accN = accountManager.getAccount(key);
        account1.textContent = accN.name;
        selectedKey = accN.key;
    }

// Adding a new account
    if (todo === 'addAcc') {
        const [acct, card] = accountManager.addAccount(accName.value, Number(startBal.value));
        accList.appendChild(card);
        let br = document.createElement('br');
        accList.appendChild(br);
        updateAccounts();
        return acct;
    }

// Depositing into selected account
    if (todo === 'deposit') {
        let result = accountManager.deposit(selectedKey, depAmount);
        depositAmount.value = '';
        let card = document.getElementById(`${selectedKey}`)
        card.textContent = result;
        updateAccounts();
    }

// Withdrawing from selected account
    if (todo === 'withdraw') {
        let result = accountManager.withdraw(selectedKey, withdrAmount);
        withdrawalAmount.value = '';
        let card = document.getElementById(`${selectedKey}`)
        card.textContent = result;
        updateAccounts();
    }

//Deleting selected account along with the card
    else if (todo === 'delete') {
        accountManager.deleteAccount(selectedKey);
        let card = el.parentElement;
        let accountList = card.parentElement;
        accountList.removeChild(card);
        updateAccounts();

    }
})

// Function updating largest, smallest accounts and total funds in the Piggy Bank
function updateAccounts() {

    let biggest = accountManager.highestBalance();
    bigName.textContent = biggest;

    let smallest = accountManager.lowestBalance();
    smallName.textContent = smallest;

    let total = accountManager.totalBalance();
    totalFunds.textContent = total;
    accName.value = '';
    startBal.value = '';

}

