import { Card, AccountControl } from './accounts.js';

let accountManager = new AccountControl();


//Adding new account


document.body.addEventListener('click', e => {

    const el = e.target;
    const key = el.getAttribute('key');
    const checkbox = document.getElementById('checkbox');
    // console.log(key);
    

    if (el.nodeName === 'BUTTON') {

        if (el.textContent === 'Add Account') {
            accountManager.addAccount(accName.value, Number(startBal.value));
             console.log(accountManager.accArr);

        }

        else if (el ==='checkbox') {
            if (checkbox.checked = true) {
            let result = accountManager.getAccount(checkbox);
            console.log(result);
            }
        }
        else if (el.textContent === 'Deposit') {
                    let result = accountManager.deposit(key, depAmount.value);
                    return result;
                }

    }

});







    // let addAccBtn = document.getElementById('addAccountBtn');
    // let depAmount = document.getElementById('depositAmount');
    // let depBtn = document.getElementById('depositBtn');

    // //Creating new account


    // document.body.addEventListener('click', e => {

    //     const el = e.target;
    //     const key = el.getAttribute('key');
    //     // console.log(key);

    //     // console.log('You clicked');
    //     // console.log(e.target.textContent);
    //     // console.log(e.target.id);
    //     // console.log(e.target);

    //     // console.log(accountManager.accArr);

    //     if (el.nodeName === 'BUTTON') {
    //         // console.log(e.target.textContent);
    //         if (el.textContent === 'Add Account') {
    //             let i = 0;
    //             console.log(accountManager.accArr)
    //             // console.log(accName.value)
    //             accountManager.addAccount(accName.value, Number(startBal.value));
    //             let newAcc = new Card(accountManager.nextKey(), accName.value, Number(startBal.value));
    //             let accList = document.getElementById('accountsList');
    //             accList.insertAdjacentElement('afterend', newAcc.buildCard());
    //             i++;

    //         }
    //     }

    //     else if (el.textContent === 'Deposit') {
    //         let result = accountManager.deposit(key, depAmount.value);
    //         return result;
    //     }
    // });


            // Depositing Money


// document.getElementById("iddepBtn").addEventListener("click", () => {
//     for (let i = 0; i<accountManager.accArr.length; i++) {
//         if (document.getElementById("idAccountName").value === accountManager.accArr[i].accName) {
//             let amount = Number(document.getElementById("idDepAmount").value);
//             accountManager.accArr[i].deposit(amount);

//         }
//     }
// })



    //     } else if (e.target.textContent === 'Deposit') {
    //         console.log(depAmount.value);
    //         accountManager.accArr[0].deposit(depAmount.value);
    //         console.log(accountManager.accArr);
    //     }


    // }),

