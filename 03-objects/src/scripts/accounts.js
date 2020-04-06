class Account {
    constructor(accountName, startingBalance) {
        this.name = accountName;
        this.balance = startingBalance;
    }

    deposit(amount) {
        this.balance += Number(amount);
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

class Card {

    constructor (card) {
    const div = document.createElement('div');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(card));
        div.appendChild(li);

        // let card = li.appendChild(document.createTextNode(`${accountName}: $${startingBalance}`));
        // div.appendChild(li);


        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        li.appendChild(delBtn);
        document.querySelector('ul').appendChild(div);

        li.classList.add("form-control");;
        delBtn.setAttribute("class", "btn btn-outline-secondary");

    }
}


// 130C

class AccountControl {
    constructor() {
        this.accArr = [];
    }

    addAccount(accountName, startingBalance) {
        this.accArr.push(new Account(accountName, startingBalance));
        new Card(document.createTextNode(`${this.name}: $${this.balances}`));

      
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



export { Account, AccountControl };
