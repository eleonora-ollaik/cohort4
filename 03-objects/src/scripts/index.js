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
    const value = el.getAttribute('value');
    const name = el.getAttribute('name');
    let depAmount = document.getElementById('depositAmount').value;
    let withdrAmount = document.getElementById('withdrawalAmount').value;
    const depBtn = document.getElementById('depositBtn');
    const cardBalance = document.getElementById('idCardBalance');
    const todo = el.getAttribute('todo')
    const account1 = document.getElementById('accountName');
    // console.log('todo', todo);
    // console.log(el.id);

    if (key) {
        console.log('I should set my accName');
        let accN = accountManager.getAccount(key);
        console.log(accN.name);
        account1.textContent = accN.name;
        selectedKey = accN.key;

    }

    if (todo === 'deposit') {
        console.log('I want to deposit');
        console.log('selected key', selectedKey)
        let result = accountManager.deposit(selectedKey, depAmount);
        console.log(result);
        console.log(accountManager.accArr);
        console.log(cardBalance.textContent);
        let cardBal = accountManager.getAccount(selectedKey);
        cardBalance.textContent = cardBal ;
        depositAmount.value = '';
        updateAccounts();
    }

    if (todo === 'withdraw') {
        console.log('I want to withdraw');
        console.log('selected key', selectedKey)
        let result = accountManager.withdraw(selectedKey, withdrAmount);
        console.log(result);
        console.log(accountManager.accArr);
        console.log(cardBalance);
        cardBalance.textContent = result;
        withdrawalAmount.value = '';
        updateAccounts();
    }
    if (todo === 'addAcc') {
        const [acct, card] = accountManager.addAccount(accName.value, Number(startBal.value));
        accList.appendChild(card);
        console.log(acct);
        updateAccounts();
        return acct;

    }

    else if (todo === 'delete') {
        accountManager.deleteAccount(selectedKey);
        
        let card = el.parentElement;
        let accountList = card.parentElement;
        accountList.removeChild(card);
        updateAccounts()

    }

   
})

function updateAccounts ()  {

    let biggest = accountManager.highestBalance();
    bigName.innerHTML = biggest;

    let smallest = accountManager.lowestBalance();
    smallName.innerHTML = smallest;

    let total = accountManager.totalBalance();
    totalFunds.innerHTML = total;
    accName.value = '';
    startBal.value = '';
    
}

function updateBalance (selectedKey) {
    for (let i = 0; i < this.accArr.length; i++) {
        if (selectedKey == this.accArr[i].key) {
            let result = this.accArr[i];
            return result;
        }
    }
}