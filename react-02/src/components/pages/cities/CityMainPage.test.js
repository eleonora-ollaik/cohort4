import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import CityMainPage from './CityMainPage';

test ('main page test', async () => {
const fakeCities = [
    {key:'k1', name:'Paris', latitude: 48.85341, longtitude: 2.3488, population: 2148000},
    {key: 'k2', name: 'Santiago', latitude: -33.4489, longtitude: 70.6693, population: 5614000}
]


render (<CityMainPage 
    list = {fakeCities}
    />);

    screen.getByText(/Add new city/i);

    screen.getByText(/The most northern city/i);

    screen.getByText(/The most southern city/i);

    screen.getByText(/Total/i);


    // screen.getByText(/city name/i);

    // screen.getByText(/city latitude/i);

    // screen.getByText(/city longtitude/i);

    // screen.getByText(/city population/i);

    // screen.getByText(/Add new city/i);

})
