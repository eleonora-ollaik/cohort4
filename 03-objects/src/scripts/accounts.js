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
        checkbox.setAttribute('name', this.name);
        checkbox.setAttribute('value', this.balance);
        card.appendChild(checkbox);
      

        let accName = document.createElement('span');
        accName.appendChild(document.createTextNode(this.name));
        accName.setAttribute('id', 'idAccountName');
        accName.setAttribute('key', this.key);
        card.appendChild(accName);
        card.setAttribute('class', 'row');
        card.setAttribute('id', 'card');
        card.setAttribute('key', this.key)

        let bal = document.createElement('span');
        bal.setAttribute('id', 'idCardBalance');
        bal.setAttribute('key', this.key);
        bal.textContent = this.balance;
        card.appendChild(bal);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        card.appendChild(delBtn);
        accName.classList.add("divClass");
        bal.classList.add("divClass");
        delBtn.setAttribute("class", "btn btn-outline-secondary");
        delBtn.setAttribute('todo', 'delete')
        delBtn.setAttribute('key', this.key);
        
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

    deleteAccount(key) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (key === this.accArr[i].key) {
                this.accArr.splice(i, 1)
            }
        }
    }





}


export { Account, Card, AccountControl };
