import { City, Community } from './communities.js';
// import functions from './fetch.js';
// window.fetch = require('node-fetch');

let comm = new Community();
let citiesList = document.getElementById('citiesList');
let northern = document.getElementById('northern');
let southern = document.getElementById('southern');
let totalPop = document.getElementById('total');
let selectedKey;


addEventListener("load", myloadScript());

async function myloadScript() {
    await comm.getCommunity();
    console.log(comm);
    let cards = comm.list.map(city => comm.buildCard(city.name, city.latitude, city.longtitude, city.population))
    console.log(cards.latitude);
    console.log(typeof cards);
    cards.forEach(thediv => { citiesList.appendChild(thediv) });
    updateCities()

}


// let comm = new Community();

document.body.addEventListener('click', async e => {

    const el = e.target;
    const todo = el.getAttribute('todo');
    let key = el.getAttribute('key');

    if (key) {
        let city = comm.getLocal(key);
        selectedKey = city.key
        console.log(selectedKey);
        
    }


    if (todo === 'addCity') {
        // let data = functions.postData('http://localhost:5000/all')
        const city = await comm.createCity(cityName.value, Number(latitude.value), Number(longtitude.value), Number(population.value));
        console.log(city);

        let card = comm.buildCard(cityName.value, latitude.value, Number(longtitude.value), Number(population.value));
        citiesList.appendChild(card);
        updateCities();
        return city;
    }

    if (todo === 'addPop') {
        let newPop = comm.deposit(selectedKey, popNum); 
        idPop.textContent = 'Population: ' + newPop;
        updateCities;
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


