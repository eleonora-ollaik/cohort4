import NewCard from './Card';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import AccountControl from './business/Accounts'
// import  { Account, Card, AccountControl } from './business/Accounts.js'

const mockDepositFn = jest.fn();
const mockWithdrawFn = jest.fn();
const mockDelete = jest.fn()



test('the card renders', () => {
  render(<NewCard card={account1} deposit={mockDepositFn} withdraw={mockWithdrawFn} delete = {mockDelete}/>);

  screen.debug();
});

test.todo('Test deposit and withdrawls');
