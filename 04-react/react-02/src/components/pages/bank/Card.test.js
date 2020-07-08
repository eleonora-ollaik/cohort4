import NewCard from './Card';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import AccountControl from './business/Accounts'
// import  { Account, Card, AccountControl } from './business/Accounts.js'

const mockDepositFn = jest.fn();
const mockWithdrawFn = jest.fn();
const mockDelete = jest.fn()



test('the card renders', () => {

  const card1 =
     {key: 'k1', name: 'Acc1', balance:'15'}
    //  {key: 'k2', name: 'Acc2', balance:'145'}
  
  

const {getByText} =
 render(<NewCard card={card1} onDeposit={mockDepositFn} onWithdraw={mockWithdrawFn} onDelete = {mockDelete}/>);

  // screen.debug();

  expect(getByText(/account name/i)).toHaveTextContent('Acc1');
  expect(getByText(/balance/i)).toHaveTextContent('15')

  screen.getByText(/Deposit/i)
  
  // click ('Deposit');

  // expect(mockDepositFn.mock.calls.length).toBe(0);
  // click ('Deposit');
  // expect(mockDepositFn.mock.calls.length).toBe(1);

  // expect(mockWithdrawFn.mock.calls.length).toBe(0);
  // click ('Withdraw');
  // expect(mockWithdrawFn.mock.calls.length).toBe(1);

  // expect(mockDeleteFn.mock.calls.length).toBe(0);
  // click ('Delete');
  // expect(mockDeleteFn.mock.calls.length).toBe(1);


});

function click (txt) {
  fireEvent.click(
      screen.getByText(txt)
  );
}
test.todo('Test deposit and withdrawls');
