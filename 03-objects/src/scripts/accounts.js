//
// You must do the things you think you cannot do.
// Eleanor Roosevelt


class Account {
    constructor(accountName, startingBalance, key) {
        this.name = accountName;
        this.balance = startingBalance;
        this.key = key;
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






// 130C

class AccountControl {
    constructor () {
        
         this.accArr = [];
         
    }

    addAccount(accountName, startingBalance) {
        this.accArr.push(new Account(accountName, startingBalance));
        return this.accArr;
        
    }

    getBalance(name) {
        let index = this.accArr.findIndex(accFinder => accFinder.accName ===name);
        return this.accArr[index].balance()
    }
    
    // handleChange() {
    //     this.buildCard(this.accName,this.balance)
    //     let checkBox = this.checked;
    //     let bal = this.div2
    //     if (checkBox= true) {
    //         console.log(bal)
    //     }
    // }

    accountDeposit(name, amount) {
        let index = this.accArr.findIndex(accFinder => accFinder.accountName === name);
        this.accArr[index].deposit(amount);
        return this.accArr[index].balance
    }
// let name be e.target.nodeName, amount = input field
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

    buildCard(accName, startBal) {
		
		// const div = document.createElement('div');
        let mainDiv = document.createElement('div');
        console.log(accName, startBal);
        let checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('id', 'checkbox')
        // checkBox.setAttribute ('onchange', 'handleChange(this)')
        mainDiv.appendChild(checkBox)
        let div1 = document.createElement('div')
        div1.appendChild(document.createTextNode(accName));
        mainDiv.appendChild(div1);
        mainDiv.setAttribute('class', 'row')
        mainDiv.setAttribute('id', 'card');
        
        let div2 = document.createElement('div');
        div2.setAttribute('id', `${accName}`) // how to set a dinamic id 
        div2.appendChild(document.createTextNode(startBal))
        mainDiv.appendChild(div2);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        mainDiv.appendChild(delBtn);
        div1.classList.add("divClass");;
        div2.classList.add("divClass");;
        // mainDiv.setAttribute('id', 'account');
        delBtn.setAttribute("class", "btn btn-outline-secondary");

        // let accList = document.getElementById('accountsList');
        
        // // div.appendChild(li);
        // accList.appendChild(mainDiv);

      
        
        // node.parentElement.insertBefore(li, node);
        return mainDiv;
    }

}
const functions = {

   
    


}


export { Account, AccountControl, functions };
