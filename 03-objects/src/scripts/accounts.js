//
// You must do the things you think you cannot do.
// Eleanor Roosevelt


class Account {
    constructor(accountName, startingBalance) {
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

    buildCard() {

        let mainDiv = document.createElement('div');



        let div1 = document.createElement('div')
        div1.appendChild(document.createTextNode(this.name));
        div1.setAttribute('id', 'idAccountName')
        mainDiv.appendChild(div1);
        mainDiv.setAttribute('class', 'row')
        mainDiv.setAttribute('id', 'card');

        let div2 = document.createElement('div');
        div2.setAttribute('id', `${this.name}`)

        div2.textContent = this.balance;
        mainDiv.appendChild(div2);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        mainDiv.appendChild(delBtn);
        div1.classList.add("divClass");;
        div2.classList.add("divClass");;
        // mainDiv.setAttribute('id', 'account');
        delBtn.setAttribute("class", "btn btn-outline-secondary");

        const depositDiv = document.createElement('div');
        const depAmount = document.createElement('input');
        depAmount.setAttribute('id', 'idDepAmount')
        const depBtn = document.createElement('btn');
        depBtn.textContent = 'Deposit'
        depBtn.setAttribute('id', 'iddepBtn')

        depositDiv.appendChild(depAmount);
        depositDiv.appendChild(depBtn);

        mainDiv.appendChild(depositDiv);

        const withdrDiv = document.createElement('div');
        const withdrAmount = document.createElement('input');
        const withdrBtn = document.createElement('btn');
        withdrBtn.textContent = 'Withdraw'

        withdrDiv.appendChild(withdrAmount);
        withdrDiv.appendChild(withdrBtn);

        mainDiv.appendChild(withdrDiv);



        depBtn.addEventListener('click', () => {
            this.deposit(depAmount.value);
            depAmount.value = '';
            div2.textContent = this.balance



        })


        return mainDiv;

    }

};






// 130C

class AccountControl {
    constructor() {

        this.accArr = [];

    }

    addAccount(accountName, startingBalance) {
        this.accArr.push(new Account(accountName, startingBalance));
        return this.accArr;

    }

    getBal(accountName) {
        //   console.log(accountName)
        for (let i = 0; i < this.accArr.length; i++) {
            if (accountName == this.accArr[i].name) {
                console.log(i);
                return this.accArr[i].balance;

            }
        }

    }

    deposit(accountName, amount) {
        for (let i = 0; i < this.accArr.length; i++) {
            if (accountName == this.accArr[i].name) {
                let result = this.accArr[i].deposit(amount);
                return result;

            }
        }
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
