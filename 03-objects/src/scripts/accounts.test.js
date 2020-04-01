import { Account, AccountControl } from './accounts.js';


test ('Class test', () => {
    const acc1 = new Account('acc1', 25);

    // console.log(acc1.deposit(10));
    // console.log(acc1.withdraw(30));
    // console.log(acc1.balance);

    expect (acc1.deposit(10)).toEqual(35);
    expect (acc1.withdraw(30)).toEqual(5);
    expect (acc1.balance).toEqual(5);

});

test ('AccountController test', () => {
    const accContr = new AccountControl ();
    expect (accContr.accArr).toEqual([]);
})

test ('Adding account Test', () => {
    const accContr = new AccountControl ();
    accContr.addAccount('Cat Food', 15);
    expect (accContr.accArr.length).toBe(1)
})