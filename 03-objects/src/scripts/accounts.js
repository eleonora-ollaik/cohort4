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






// 130C

class AccountControl {
    constructor() {
        this.accArr = [];
    }

    addAccount(accountName, startingBalance) {
        this.accArr.push(new Account(accountName, startingBalance));
        return this.accArr;
        
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
const functions = {

    buildCard(accName, startBal) {
		
		// const div = document.createElement('div');
        let li = document.createElement('li');
        console.log(accName, startBal);
        li.appendChild(document.createTextNode(accName));
        
        let pTag = document.createElement('P');
        pTag.appendChild(document.createTextNode(startBal))
        li.appendChild(pTag);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        li.appendChild(delBtn);
        li.classList.add("form-control");;
        delBtn.setAttribute("class", "btn btn-outline-secondary");

        let ul = document.getElementById('accountsList');
        
        // div.appendChild(li);
        ul.appendChild(li);

      
        
        // node.parentElement.insertBefore(li, node);
        return div;
    }
    


}


export { Account, AccountControl, functions };
