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


//Adding account Test
    
    accContr.addAccount('Cat Food', 15);
    expect (accContr.accArr.length).toBe(1)
    expect (accContr.accArr[0].balance).toBe(15);
    expect (accContr.accArr[0].name).toBe('Cat Food');
    expect (accContr.accArr).toEqual([{ name: 'Cat Food', balance: 15}]);

//Creating card
    let card = accContr.buildCard('Cat Food, 15');
    expect (card).toBeTruthy()


// Total Balance
    accContr.addAccount('Gas Money', 40);
    expect (accContr.accArr).toEqual([{name: 'Cat Food', balance: 15}, {name: 'Gas Money', balance: 40}]);
    expect (accContr.totalBalance()).toBe('$55');



//Highest Balance
    expect (accContr.highestBalance()).toEqual('Gas Money: $40');



//Lowest Balance
    expect (accContr.lowestBalance()).toEqual('Cat Food: $15');


//Delete Account
    accContr.deleteAccount('Cat Food');
    expect (accContr.accArr.length).toBe(1);
    expect (accContr.accArr).toEqual([{name: 'Gas Money', balance: 40}]);

// Getting Balance
accContr.getBalance('Gas Money');
expect (accContr.accArr[0].balance).toBe('40')

//AccountDeposit in AccountControl
    accContr.accountDeposit(('Gas Money'), 10);
    expect(accContr.accArr[0].balance).toEqual('50');

// //handleChange test
// accContr.handleChange();
// expect (accContr.handleChange().toBe(50));

    })