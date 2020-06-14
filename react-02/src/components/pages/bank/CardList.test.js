import CardList from './CardList';
import React from 'react';
import {render, screen} from '@testing-library/react'
import  { AccountControl } from './business/Accounts.js'

const mockDepositFn = jest.fn();
const mockWithdrawFn = jest.fn();
const mockDeleteFn = jest.fn();

// const cards =[
  //    {key: 'k1', name: 'Acc1', balance:'15'},
  //    {key: 'k2', name: 'Acc2', balance:'145'}
  
  // ]
  
  test('the empty list renders', () => {
    const testAccts = new AccountControl();
    
    testAccts.addAccount('A', 1);
    // testAccts.addAccount('B', 2);
    // testAccts.addAccount('C', 3);
    
let cards = testAccts.accArr.map(card => {
  return <CardList
  
  // key = {card.key}
  accounts = {testAccts}
  // handleWithdraw = {this.props.handleWithdraw}

  // handleDeposit = {this.props.handleDeposit}
  // handleDelete={this.props.handleDelete}

   />
  //  accounts={this.state.accounts}
  //  handleDelete={this.handleDelete}
  //  handleDeposit={this.handleDeposit}
  //  handleWithdraw={this.handleWithdraw}

  
}) 
  render(cards);


  // let demoData = cards.map((card) => (
  //   <Card
  //     key={card.key}
  //     card={card}
  //     handleWithdraw = {mockWithdrawFn}
  //     handleDeposit = {mockDepositFn}
  //     handleDelete={mockDeleteFn}
  //   />
  // ))
  screen.debug();

  // screen.getByText(/acc1/)
});

// test.todo('Test deposit and withdrawls');
// test.todo('it does not crash if the account list is empty');
