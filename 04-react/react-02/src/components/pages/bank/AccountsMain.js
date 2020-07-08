import React, { Component } from 'react';
import CreateAcc from './CreateAccForm';
import CardList from './CardList';
import { AccountControl } from './business/Accounts.js';
import { ThemeContext } from '../settings/ThemeContext';

// const controller = new AccountControl;
export class AccountsMain extends Component {
  static contextType = ThemeContext;

  constructor() {
    super();
    this.state = {
      accounts: new AccountControl(),
   

    };
  }

//   componentDidMount() {
//     this.state.accounts.addAccount('Acc1', 15);
//     this.state.accounts.addAccount('Acc2', 10);
//     this.setState({ accounts: this.state.accounts });
//   }
handleDeposit = (key, transAmount) => {
    this.state.accounts.deposit(key, transAmount)
    this.setState({accounts: this.state.accounts})
}

handleWithdraw = (key, transAmount) => {
    this.state.accounts.withdraw(key, transAmount)
    this.setState({accounts: this.state.accounts})
}

  handleDelete = (key) => {
    console.log('delete key pressed');
    this.state.accounts.deleteAccount(key);
    this.setState({ accounts: this.state.accounts });
  };

  handleCreateAcc = (name, balance) => {
    this.state.accounts.addAccount(name, balance);
    this.setState({ accounts: this.state.accounts });
    // console.log(this.state.accounts)
  };

  

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    let largest = this.state.accounts.highestBalance();
    let smallest= this.state.accounts.lowestBalance();
    let total =  this.state.accounts.totalBalance();

    return (
      <div className='MainPage' style={{ color: theme.syntax, background: theme.bg }}>
        <div className='container'>
          <h1>Piggy Bank</h1>
          <React.Fragment>
            <CreateAcc
              accounts={this.state.accounts}
              onNewAcc={this.handleCreateAcc}
            />
            <div className ='row'>
            <div className='largest'>
            <span> Largest account: </span>
            <span>{largest}</span>
            {/* <span>{this.state.largest.balance}</span> */}

            </div>

            <div className='smallest'>
            <span> Smallest account:</span>
            <span>{smallest} </span>
            </div>

            <div className='total'>
            <span> Total: </span>
            <span>{total} </span>
            </div>

            </div>
            <CardList
              accounts={this.state.accounts}
              handleDelete={this.handleDelete}
              handleDeposit={this.handleDeposit}
              handleWithdraw={this.handleWithdraw}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default AccountsMain;
