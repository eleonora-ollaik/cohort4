class Account {
    constructor (accountName, startingBalance) {
        this.name = accountName;
        this.balance = startingBalance;
    }
    
    deposit (amount) {
        this.balance += Number(amount);
        return this.balance;
    }

    withdraw (amount) {
        this.balance -= Number(amount);
        return this.balance;
    }

    balance () {
        return this.balance;
    }
};



// 130C

class AccountControl {
    constructor() {
        this.accArr = [];
    }

addAccount(accountName, startingBalance) {
    this.accArr.push(new Account(accountName, startingBalance));
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
            let currentName = this.accArr[i].accountName;
            highBal = Number(this.accountName[i].balance);
            highName = currentName;
        }
    }
    return `${highName}: $${highBal}`;
}

lowestBalance() {
    let lowestBal = 0;
    let lowName;
    for (let i = 0; i < this.accArr.length; i++) {
            let low = this.accArr[0].balance;
            let curr = this.accArr[i].balance;
            let currentName = this.accArr[i].accountName;
            if (low > curr) {
            lowestBal = Number(this.accountName[i].balance);
            lowName = currentName;
        }
    }
    return `${lowName}: $${lowestBal}`;
}

}


export {Account, AccountControl};
