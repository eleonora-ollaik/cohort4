import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import CityCard from './CityCard';

const mockPopIncrease = jest.fn();
const mockPopDecrease = jest.fn();
const mockDelete = jest.fn();

test ('the card renders', () => {

    const card1 = 
    {key:'k1', name:'Paris', latitude: 48.85341, longitude: 2.3488, population: 2148000};

    const {getByText} =
    render(<CityCard city ={card1} onMoveIn={mockPopIncrease} onMoveOut={mockPopDecrease} onDelete={mockDelete} />);

    expect(getByText(/City name/i)).toHaveTextContent('Paris');
    expect(getByText(/City latitude/i)).toHaveTextContent('48.85341');
    expect(getByText(/City longitude/i)).toHaveTextContent('2.3488');
    expect(getByText(/City populatiom/i)).toHaveTextContent('2148000');

    screen.getByText(/move in/i)
    screen.getByText(/move out/i)
    screen.getByText(/delete/i)

    expect(mockPopIncrease.mock.calls.length).toBe(0);
    click ('Move In');
    expect(mockPopIncrease.mock.calls.length).toBe(1);

    expect(mockPopDecrease.mock.calls.length).toBe(0);
    click ('Move Out');
    expect(mockPopDecrease.mock.calls.length).toBe(1);

    expect(mockDelete.mock.calls.length).toBe(0);
    click ('Delete');
    expect(mockDelete.mock.calls.length).toBe(1);


})

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
  }
  