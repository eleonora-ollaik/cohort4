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

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    
    let li = document.createElement('li');

    
    li.appendChild(document.createTextNode(`${accountName}: $${startingBalance}`));
    div1.appendChild(div2);
    div2.appendChild(li);
    document.querySelector('ul').appendChild(li);
    

 

    const delBtn = document.createElement('button');
		const delBtnText = document.createTextNode('Delete');
		delBtn.appendChild(delBtnText);
        
        div1.setAttribute('class','input-group mb-3');
        div2.classList.add('input-group-append')
        li.classList.add("form-control");;
        div2.appendChild(delBtn);
        delBtn.setAttribute("class", "btn btn-outline-secondary");
       
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
    for (let i = this.accArr.length-1; i>=0; i--) {
            let low = Number(this.accArr[i].balance);
            let currentName = this.accArr[i].name;
            if (low < lowestBal) {
            lowestBal = low;
            lowName = currentName;
        }
    }
    return `${lowName}: $${lowestBal}`;
}

deleteAccount (accountName) {
    for (let i=0; i< this.accArr.length; i++) {
        if (accountName === this.accArr[i].name) {
            this.accArr.splice(i,1)
        }
    }
}

}


export {Account, AccountControl};
