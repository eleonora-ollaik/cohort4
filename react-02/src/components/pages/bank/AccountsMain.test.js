import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import AccountsMain from './AccountsMain';

test ('main page test', async () => {
const fakeAccs =[
     {key: 'k1', name: 'Acc1', balance:'15'},
     {key: 'k2', name: 'Acc2', balance:'145'}
  
  ]

  render(<AccountsMain
    accounts = {fakeAccs}
    />);

    screen.getByText(/Add new Acc/i);


    screen.getByText(/Largest/i);
    screen.getByText(/Smallest/i);
    screen.getByText(/Total/i);

    screen.getByText(/Account name/i);
    screen.getByText(/Balance/i);



});

function click(txt) {
    fireEvent.click(
      screen.getByText(txt)
    );
  }
  