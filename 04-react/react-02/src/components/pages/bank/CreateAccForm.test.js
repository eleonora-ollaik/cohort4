import CreateAcc from './CreateAccForm.js';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccountControl } from './business/Accounts.js';

test('testing the CreateAcc form', () => {
  const accContr = new AccountControl();
  const acc = accContr.addAccount('cat food', 15);

  const mockSubmit = jest.fn();
  const mockChange = jest.fn();

  render(<CreateAcc acc={acc} onNewAcc={mockSubmit} onChange={mockChange} />);

  screen.getByText(/add account/i);

  expect(mockSubmit.mock.calls.length).toBe(0);
  click('Add Account');
  expect(mockSubmit.mock.calls.length).toBe(1);

  // screen.debug();
});

function getValue(name) {
  return document.querySelector(`[name=${name}]`).value;
}

function click(txt) {
  fireEvent.click(screen.getByText(txt));
}
