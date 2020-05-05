import {City, Community} from './communities.js'

global.fetch = require('node-fetch');
const url = 'http://127.0.0.1:5000/';



// Testing City class

test ('City class', () => {
    const city1 = new City ('k','Paris', 48.85341, 2.3488, 2148000);
    const city2 = new City ('k1', 'Bishkek', 42.8746, 74.5698,  976734)

    expect(city1.key).toBe('k');
    expect(city2.key).toBe('k1');

// Testing the show method
    expect(city1.show()).toBe('Paris has a latitude of 48.85341 and a longtitude of 2.3488 and a population of 2148000')
    
// Testing the movedIn method
    expect(city1.movedIn(150)).toBe(2148150);
    expect(city2.movedIn(66)).toBe(976800);

// Testing the movedOut method
    expect(city1.movedOut(150)).toBe(2148000);
    expect(city2.movedOut(66)).toBe(976734);

// Testing the howBig method
    const city3 = new City ('k2', 'Yeysk', 46.7129, 38.2741, 84259);

    expect(city1.howBig()).toBe('City');
    expect(city2.howBig()).toBe('City');
    expect(city3.howBig()).toBe('Large Town')
});


// Testing the Community Class


test ('Community class', async () => {

    const newCom = new Community;

// Testing createCity method

    expect(newCom.list).toStrictEqual([]);

    let data = await newCom.createCity('Yeysk', 46.7129, 38.2741, 84259);
    // expect(newCom.list.length).toBe(1);
    
    expect(newCom.list[0].key).toBe(4);
    expect(newCom.list[0].name).toBe('Yeysk');
    expect(data.status).toBe(200);

// Testing which sphere the city is in

    newCom.createCity('Santiago', -33.4489, 70.6693, 5614000);
    expect(newCom.whichSphere(newCom.list[1])).toBe('Southern Hemisphere');
    expect(newCom.whichSphere(newCom.list[0])).toBe('Northern Hemisphere');


// Testing Most Northern and Most Southern methods
    newCom.createCity('Paris', 48.85341, 2.3488, 2148000);
    newCom.createCity('Bishkek', 42.8746, 74.5698,  976734);

    expect(newCom.getMostNorthern()).toBe('Paris is the most Northern city with latitude of 48.85341');
    expect(newCom.getMostSouthern()).toBe('Santiago');

// Testing getTotalPopulation method
 
    expect(newCom.getPopulation()).toBe(8822993);

// Removing a city - test

    newCom.deleteCity('k1');
    expect(newCom.list.length).toBe(3);
    expect(newCom.list[0].name).toBe('Santiago');

}) 