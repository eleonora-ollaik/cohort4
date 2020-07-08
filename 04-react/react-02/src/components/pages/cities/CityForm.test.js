import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import comm from './business_logic/Communities';
import CityForm from './CityForm';

test('test the basic CityForm', async () => {

    const mockAddCallback = jest.fn();
    const mockOnChange = jest.fn();
    const mockRandom = jest.fn();

    const communities = new comm.Community()
    const city = communities.createCity('Bishkek', 42.8746, 74.5698, 976734)
    // const city = communities.getNewCity();

    // // city.key = communities.nextKey();
    // city.name = 'Bishkek';
    // city.latitude = 42.8746;
    // city.longtitude = 74.5698;
    // city.population = 976734;

// console.log(city);

    render (<CityForm
        city = {city}
        onAdd = {mockAddCallback}
        onChange = {mockOnChange}
        onRandom = {mockRandom}
        />)

        // screen.debug();

        screen.getByText(/add new city/i);
        screen.getByText(/generate random city/i);

        expect(getValue('name')).toBe('Bishkek');
        expect(mockAddCallback.mock.calls.length).toBe(0)
        click('Add new city');

        expect(mockAddCallback.mock.calls.length).toBe(1);

        click('Generate Random City');

        expect(mockRandom.mock.calls.length).toBe(1);

 })

 function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}