//
// You must do the things you think you cannot do.
// Eleanor Roosevelt


class Account {
    constructor(key, accountName, startingBalance) {
        this.key = key;
        this.name = accountName;
        this.balance = startingBalance;

    }

    deposit(amount) {
        this.balance = this.balance + Number(amount);
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= Number(amount);
        return this.balance;
    }

    balance() {
        return this.balance;
    }

};



class Card extends Account {




    buildCard() {


        let card = document.createElement('div');
        // console.log(accList);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checkbox');
        checkbox.setAttribute('key', this.key);
        card.appendChild(checkbox);
        if  (checkbox.checked = true){
            console.log(checkbox.key);
            
        };

        let accName = document.createElement('div');
        accName.appendChild(document.createTextNode(this.name));
        accName.setAttribute('id', 'idAccountName');
        card.appendChild(accName);
        card.setAttribute('class', 'row');
        card.setAttribute('id', 'card');

        let bal = document.createElement('div');
        card.setAttribute('key', this.key);

        bal.textContent = this.balance;
        card.appendChild(bal);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        card.appendChild(delBtn);
        accName.classList.add("divClass");
        bal.classList.add("divClass");
        // mainDiv.setAttribute('id', 'account');
        delBtn.setAttribute("class", "btn btn-outline-secondary");

        const depositDiv = document.createElement('div');
        const depAmount = document.createElement('input');
        depAmount.setAttribute('id', 'idDepAmount');
        const depBtn = document.createElement('btn');
        depBtn.textContent = 'Deposit';
        depBtn.setAttribute('id', 'iddepBtn');

        depositDiv.appendChild(depAmount);
        depositDiv.appendChild(depBtn);

        card.appendChild(depositDiv);

        const withdrDiv = document.createElement('div');
        const withdrAmount = document.createElement('input');
        const withdrBtn = document.createElement('btn');
        withdrBtn.textContent = 'Withdraw'

        withdrDiv.appendChild(withdrAmount);
        withdrDiv.appendChild(withdrBtn);

        card.appendChild(withdrDiv);



        depBtn.addEventListener('click', () => {
            this.deposit(depAmount.value);
            depAmount.value = '';
            bal.textContent = this.balance;



        })
        return card;


    }
}


// 130C

class AccountControl {
    constructor() {

        this.accArr = [];
        this.counter = 1;

    }

    nextKey() {
        return `k${this.counter++}`;
    }

    addAccount(accountName, startingBalance) {
        const key = this.nextKey();
        let account = new Card(key, accountName, startingBalance)
        let card = account.buildCard()
        this.accArr.push(account);
        return [this.accArr, card];


    }

    getAccount(key) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (key == this.accArr[i].key) {
                let result = this.accArr[i];
                return result;
            }
        }

    }

    deposit(key, amount) {
        let account = this.getAccount(key);
        let balance = account.deposit(amount);
        return balance;

    }

    withdraw(key, amount) {
        let account = this.getAccount(key);
        let balance = account.withdraw(amount);
        return balance;

    }

    totalBalance() {
        let total = 0;
        for (let i = 0; i < this.accArr.length; i++) {
            total += Number(this.accArr[i].balance);
        }
        return `$${total}`;
    }

    highestBalance() {
        let highBal = 0;
        let highName;
        for (let i = 0; i < this.accArr.length; i++) {
            if (this.accArr[i].balance > highBal) {
                let currentName = this.accArr[i].name;
                highBal = Number(this.accArr[i].balance);
                highName = currentName;
            }
        }
        return `${highName}: $${highBal}`;
    }

    lowestBalance() {
        let lowestBal = Number.POSITIVE_INFINITY;
        let lowName;
        for (let i = this.accArr.length - 1; i >= 0; i--) {
            let low = Number(this.accArr[i].balance);
            let currentName = this.accArr[i].name;
            if (low < lowestBal) {
                lowestBal = low;
                lowName = currentName;
            }
        }
        return `${lowName}: $${lowestBal}`;
    }

    deleteAccount(accountName) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (accountName === this.accArr[i].name) {
                this.accArr.splice(i, 1)
            }
        }
    }





}


export { Account, Card, AccountControl };
