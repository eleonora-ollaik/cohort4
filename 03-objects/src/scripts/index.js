import { Card } from './accounts.js';
import { AccountControl } from './accounts.js';

let accountManager = new AccountControl();


//Adding new account


document.body.addEventListener('click', e => {

    const el = e.target;
    const key = el.getAttribute('key');
    let accList = document.getElementById("idAccountsList");
    const value = el.getAttribute('value');
    const name = el.getAttribute('name');
    const depAmount = document.getElementById('depositAmount').value;
    const depBtn = document.getElementById('depositBtn');
    const bigName = document.getElementById('largest');
    const smallName = document.getElementById('smallest');
    const totalFunds = document.getElementById('total');
    const cardBalance = document.getElementsByClassName('idCardBalance');
    const todo = el.getAttribute('todo')


    if (todo === 'addAcc') {
        const [acct, card] = accountManager.addAccount(accName.value, Number(startBal.value));
        accList.appendChild(card);
        console.log(acct);

        let biggest = accountManager.highestBalance();
        bigName.innerHTML = biggest;

        let smallest = accountManager.lowestBalance();
        smallName.innerHTML = smallest;

        let total = accountManager.totalBalance();
        totalFunds.innerHTML = total;

        return acct;
    }

    else if (todo === 'delete') {
        accountManager.deleteAccount();
        console.log(accountManager.accArr)

    }



    else if (key) {

        let deposit = accountManager.deposit(key, depAmount);
        console.log(deposit);
        cardBalance.innerHTML = deposit;
        return deposit;

    }

    else if (key) {

        let withdraw = accountManager.withdraw(key, depAmount);
        console.log(withdraw);
        cardBalance.innerHTML = withdraw;
        return withdraw;

    }

})

   