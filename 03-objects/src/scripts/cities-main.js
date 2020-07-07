import { Community } from "./communities.js";
// window.fetch = require('node-fetch');

let comm = new Community();
let citiesList = document.getElementById("citiesList");
let northern = document.getElementById("northern");
let southern = document.getElementById("southern");
let totalPop = document.getElementById("total");
let cityName = document.getElementById("cityName");

addEventListener("load", myloadScript());

async function myloadScript() {
  await comm.getCommunity();
  console.log(comm);
  let cards = comm.list.map((city) => comm.buildCard(city));
  // console.log(cards.latitude);
  console.log(typeof cards);
  cards.forEach((thediv) => {
    citiesList.appendChild(thediv);
  });
  updateCities();
}

document.body.addEventListener("click", async (e) => {
  const el = e.target;
  const todo = el.getAttribute("todo");
  let city1 = document.getElementById("cityName");

  if (todo === "addCity") {
    const newKey = await comm.createCity(
      cityName.value,
      Number(latitude.value),
      Number(longtitude.value),
      Number(population.value)
    );
    let city = comm.getLocal(newKey);
    console.log(comm.list);

    let card = comm.buildCard(city);
    citiesList.appendChild(card);
    updateCities();
    return city;
  }
});

function updateCities() {
  let north = comm.getMostNorthern();
  northern.textContent = north;

  let south = comm.getMostSouthern();
  southern.textContent = south;

  let total = comm.getPopulation();
  totalPop.textContent = total;
  cityName.value = "";
  latitude.value = "";
  longtitude.value = "";
  population.value = "";
}
