import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import comm from './business_logic/Communities';
import CityForm from './CityForm';

test('test the basic CityForm', async () => {

    const mockAddCallback = jest.fn();

    const communities = new comm.Community()
    const city = communities.getNewCity();

    city.key = communities.nextKey();
    city.name = 'Bishkek';
    city.latitude = 42.8746;
    city.longtitude = 74.5698;
    city.population = 976734;

console.log(city);

    render (<CityForm
        city = {city}
        add = {mockAddCallback}
        />)

        // screen.debug();

        expect(getValue('name')).toBe('Bishkek');

        click('Add new city');

        expect(mockAddCallback.mock.calls.length).toBe(1)
 })

 function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}