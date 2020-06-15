import { City, Community } from './communities.js'
import functions from './fetch.js';



global.fetch = require('node-fetch');
const url = 'http://127.0.0.1:5000/';



// Testing City class

test('City class', () => {
    const city1 = new City('k0', 'Paris', 48.85341, 2.3488, 2148000);
    const city2 = new City('k1', 'Bishkek', 42.8746, 74.5698, 976734)

    expect(city1.key).toBe('k0');
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
    const city3 = new City('k2', 'Yeysk', 46.7129, 38.2741, 84259);

    expect(city1.howBig()).toBe('City');
    expect(city2.howBig()).toBe('City');
    expect(city3.howBig()).toBe('Large Town')
});


// Testing the Community Class


test('Community class', async () => {


    const newCom = new Community;

    // Testing createCity method

    expect(newCom.list).toStrictEqual([]);

    await newCom.createCity('Yeysk', 46.7129, 38.2741, 84259);
    expect(newCom.list.length).toBe(1);
    expect(newCom.list[0].key).toBe(1);
    expect(newCom.list[0].name).toBe('Yeysk');

    // let data = await functions.postData (url + 'delete', {key: 1})
    // expect(data.status).toBe(200);
    // console.log(data.status);
    
});

// Getting community from server

test('Getting community from server', async () => {
    const newCom = new Community;
    let data = await newCom.createCity('Yeysk', 46.7129, 38.2741, 84259);
    // expect(data.status).toBe(200);
   await newCom.getCommunity();
    // console.log(data);
    // let data = await functions.postData (url + 'delete', {key: 0})
    // expect(data.status).toBe(200);
    expect(newCom.list[0].name).toBe('Yeysk');
})

// Getting local account 

test('Get local community', async () => {
    const newCom = new Community;
    let data = await newCom.createCity('Yeysk', 46.7129, 38.2741, 84259);
    // expect(data.status).toBe(200);

    data = await newCom.getCommunity();
    expect(data[0].name).toBe('Yeysk');

    let city = newCom.getLocal(1);
    console.log(city);
    expect(city.name).toBe('Yeysk');

    //     let data = await functions.postData (url + 'delete', {key: 2})
    // expect(data.status).toBe(200);

})

// Testing which sphere the city is in

test('Which sphere', async () => {
    const newCom1 = new Community;
    await newCom1.createCity('Santiago', -33.4489, 70.6693, 5614000);
    await newCom1.createCity('Yeysk', 46.7129, 38.2741, 84259);
    console.log(newCom1.list);
    
    

    // expect(data.status).toBe(200);
    // data =  newCom.getCommunity()
    // if (data.status === 200) {
        expect(newCom1.whichSphere(4)).toBe('Southern Hemisphere');
        expect(newCom1.whichSphere(5)).toBe('Northern Hemisphere');
    // }
});


// Testing Most Northern and Most Southern methods
test('North or south', async () => {
    const newCom = new Community;

   await newCom.createCity('Paris', 48.85341, 2.3488, 2148000);
    // expect(data.status).toBe(200);
    // console.log (data)
   await newCom.createCity('Bishkek', 42.8746, 74.5698,  976734);
    // expect(data.status).toBe(200);

    expect(newCom.getMostNorthern()).toBe('Paris with latitude of 48.85341');
    expect(newCom.getMostSouthern()).toBe('Bishkek with latitude of 42.8746');

    // let data = await functions.postData(url + 'delete', { key: 1 })
    // expect(data.status).toBe(200);

});

// Testing getTotalPopulation method

test('Get population', async () => {
    const newCom = new Community;
    await newCom.createCity('Paris', 48.85341, 2.3488, 2148000);
    // expect(data.status).toBe(200);
    await newCom.createCity('Bishkek', 42.8746, 74.5698,  976734);
    // expect(data.status).toBe(200);
    // console.log (newCom.list)
    expect(newCom.getPopulation()).toBe(3124734);

    // let data = await functions.postData(url + 'delete', { key: 1 })
    // expect(data.status).toBe(200);
});

// Removing a city - test
test('Removing city', async () => {

    const newCom = new Community;
    await newCom.createCity('Paris', 48.85341, 2.3488, 2148000);
    // expect(data.status).toBe(200);
    // console.log (data)
    await newCom.createCity('Bishkek', 42.8746, 74.5698,  976734);
    // expect(data.status).toBe(200);
    // let data = await functions.postData(url + 'delete', { key: 4 })
    // expect(data.status).toBe(200);

    // data = await functions.postData(url + 'all');
    newCom.deleteCity(11);
    // console.log(data);
    console.log(newCom.list);
    
    
    expect(newCom.list.length).toBe(1);
    expect(newCom.list[0].name).toBe('Paris');


}) 