import { City, Community } from './communities.js';
import functions from './fetch.js';
// window.fetch = require('node-fetch');

let comm = new Community();
let citiesList = document.getElementById('citiesList');
let northern = document.getElementById('northern');
let southern = document.getElementById('southern');
let totalPop = document.getElementById('total');
let cityName = document.getElementById('cityName');

addEventListener("load", myloadScript());

async function myloadScript() {
    await comm.getCommunity();
    console.log(comm);
    let cards = comm.list.map(city => comm.buildCard(city));
    // console.log(cards.latitude);
    console.log(typeof cards);
    cards.forEach(thediv => { citiesList.appendChild(thediv) });
    updateCities()

}


// let comm = new Community();

document.body.addEventListener('click', async e => {

    const el = e.target;
    const todo = el.getAttribute('todo');
    let city1 = document.getElementById('cityName');
    console.log(el);






    if (todo === 'addCity') {
        // let data = functions.postData('http://localhost:5000/all')
        const newKey = await comm.createCity(cityName.value, Number(latitude.value), Number(longtitude.value), Number(population.value));
        console.log(newKey);
        // console.log(city.key);
        // console.log(city.name);
        // console.log(city.latitude);
        // console.log(city.longtitude);
        // console.log(city.population);
        // let data = await functions.postData('http://127.0.0.1:5000/add', city);
        // if (data.status === 200) {
        let city = comm.getLocal(newKey);
        console.log(city);
        console.log(typeof city);
        
        // console.log(city.key);
        // console.log(city.name);
        // console.log(city.latitude);
        // console.log(city.longtitude);
        // console.log(city.population);



        let card = comm.buildCard(city);
        citiesList.appendChild(card);
        // } else {
        //     console.log(data.status);

        // }
        updateCities();
        return city;
    }


})

function updateCities() {

    let north = comm.getMostNorthern();
    northern.textContent = north;

    let south = comm.getMostSouthern();
    southern.textContent = south;

    let total = comm.getPopulation();
    totalPop.textContent = total;
    cityName.value = '';
    latitude.value = '';
    longtitude.value = '';
    population.value = '';

}


