import React, { Component } from 'react';

export class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  onDeposit = () => {
    const amount = Number(this.state.amount);
    if (!isNaN(amount) && amount > 0) {
      this.props.handleDeposit(this.props.card.key, amount);
      this.setState({ amount: '' });
    }
  };

  onWithdraw = (props) => {
    const amount = Number(this.state.amount);
    if (!isNaN(amount) && amount > 0) {
      this.props.handleWithdraw(this.props.card.key, amount);
      this.setState({ amount: '' });
    }
  };

  onDelete = (e) => {
    // console.log('this.props :>> ', this.props);
    this.props.handleDelete(this.props.card.key);
  };

  render() {
    const { key, name, balance } = this.props.card;
    return (
      <div name='card' key={key} className='clAccountCards'>
        <h2 name='accName'>Account name: {name}</h2>

        <p name='accBal'>Account balance:{balance}</p>

        <input
          onChange={this.handleOnChange}
          value={this.state.amount}
          type='text'
          name='amount'
          placeholder='Transaction amount'
        />

        <input
          type='button'
          name='depBtn'
          value='Deposit'
          onClick={this.onDeposit}
        />

        <input
          type='button'
          name='withdrBtn'
          value='Withdraw'
          onClick={this.onWithdraw}
        />

        <input
          type='button'
          name='deleteBtn'
          value='Delete'
          onClick={this.onDelete}
        />
      </div>
    );
  }
}

export default NewCard;
