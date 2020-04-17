import { Account, AccountControl } from './accounts.js';


test('Class test', () => {
    const acc1 = new Account('acc1', 25);

    // console.log(acc1.deposit(10));
    // console.log(acc1.withdraw(30));
    // console.log(acc1.balance);

    expect(acc1.deposit(10)).toEqual(35);
    expect(acc1.withdraw(30)).toEqual(5);
    expect(acc1.balance).toEqual(5);

});




test('AccountController test', () => {


    const accContr = new AccountControl();
   
    expect(accContr.accArr).toEqual([]);


    //Adding account Test

    accContr.addAccount('Cat Food', 15);

    expect(accContr.accArr.length).toBe(1)

    accContr.addAccount('Dog Food', 15);
    expect(accContr.accArr.length).toBe(2)

    // Getting Balance

    let bal =  accContr.getBal('Cat Food');
    expect(bal).toBe(15);

    // Depositing into selected account

    accContr.deposit('Cat Food', 10);
     bal =  accContr.getBal('Cat Food');
    expect(bal).toBe(25);

    accContr.deposit('Dog Food', 15);
    bal = accContr.getBal('Dog Food');
    expect(bal).toBe(30);

    expect(accContr.accArr.length).toBe(2)
    expect(accContr.accArr[0].balance).toBe(25);
    expect(accContr.accArr[0].name).toBe('Cat Food');
    expect(accContr.accArr).toEqual([{ name: 'Cat Food', balance: 25 }, {name: 'Dog Food', balance: 30}]);

    // //Creating card
    // let card = accContr.buildCard('Cat Food, 15');
    // expect(card).toBeTruthy()


    // Total Balance
    accContr.addAccount('Gas Money', 40);
    expect(accContr.accArr).toEqual([{ name: 'Cat Food', balance: 25 },{name: 'Dog Food', balance: 30}, { name: 'Gas Money', balance: 40 }]);
    expect(accContr.totalBalance()).toBe('$95');



    //Highest Balance
    expect(accContr.highestBalance()).toEqual('Gas Money: $40');



    //Lowest Balance
    expect(accContr.lowestBalance()).toEqual('Cat Food: $25');


    //Delete Account
    accContr.deleteAccount('Cat Food');
    expect(accContr.accArr.length).toBe(2);
    expect(accContr.accArr).toEqual([{name: 'Dog Food', balance: 30}, { name: 'Gas Money', balance: 40 }]);
    console.log(accContr.accArr)


})