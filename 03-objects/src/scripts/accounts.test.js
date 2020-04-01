import Account from './accounts.js';


test ('Class test', () => {
    const acc1 = new Account('acc1', 25);

    console.log(acc1.deposit(10));
    console.log(acc1.withdraw(30));
    console.log(acc1.balance);
});