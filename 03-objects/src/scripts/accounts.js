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

export default Account;