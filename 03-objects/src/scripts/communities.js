import functions from "./fetch.js";

class City {
  constructor(key, name, latitude, longtitude, population) {
    this.key = key;
    this.name = name;
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.population = population;
  }

  show() {
    try {
      return `${this.name} has a latitude of ${this.latitude} and a longtitude of ${this.longtitude} and a population of ${this.population}`;
    } catch (error) {
      throw error;
    }
  }

  movedIn(num) {
    try {
      this.population += Number(num);
      return this.population;
    } catch (error) {
      throw error;
    }
  }

  movedOut(num) {
    try {
      this.population -= Number(num);
      return this.population;
    } catch (error) {
      throw error;
    }
  }

  howBig() {
    try {
      switch (true) {
        case this.population > 100000:
          return "City";
        case this.population > 20000:
          return "Large Town";
        case this.population > 1000:
          return "Town";
        case this.population > 100:
          return "Village";
        case this.population < 100:
          return "Hamlet";
      }
      return "No population at the moment";
    } catch (error) {
      throw error;
    }
  }
}

class Community {
  constructor() {
    this.url = "http://127.0.0.1:5000/";
    this.list = [];
    this.counter = this.list.length;
  }

  async createCity(name, latitude, longtitude, population) {
    try {
      let k;
      let data = await functions.postData(this.url + "all");
      if (data.length === 0) {
        k = 0;
      } else {
        k = data.sort((a, b) => {
          return b.key - a.key;
        });
        k = k[0].key;
      }
      let key = k + 1;

      let city = new City(key, name, latitude, longtitude, population);
      this.list.push(city);
      console.log(city);
      data = await functions.postData(this.url + "add", city);
      if (data.status === 200) {
        console.log(key);

        return key;
      }

      return "error";
    } catch (error) {
      throw error;
    }
  }

  async getCommunity() {
    try {
      let data = await functions.postData(this.url + "all");
      if (data.length > 0) {
        // console.log(data.status);
        this.list = [];
        this.list = await JSON.parse(JSON.stringify(data));
        return this.list;
      }
      return "error";
    } catch (error) {
      throw error;
    }
  }

  getLocal(key) {
    for (let i = 0; i < this.list.length; i++) {
      if (key == this.list[i].key) {
        let result = this.list[i];
        return result;
      }
    }
  }

  moveIn(key, num) {
    let city = this.getLocal(key);
    return city.movedIn(num);
  }

  whichSphere(key) {
    try {
      for (let i = 0; i < this.list.length; i++) {
        if (key == this.list[i].key) {
          let result = this.list[i].latitude;

          // return result;
          if (result > 0) {
            return "Northern Hemisphere";
          } else if (result < 0) {
            return "Southern Hemisphere";
          } else if (result === 0) {
            return "Equator";
          }
        }
      }
    } catch (error) {
      throw error;
    }
  }

  getMostNorthern() {
    if (this.list.length > 0) {
      let mostNorthern = this.list[0];
      this.list.forEach((value) => {
        if (value.latitude > mostNorthern.latitude) {
          mostNorthern = value;
        }
      });
      let result = `${mostNorthern.name} with latitude of ${mostNorthern.latitude}`;
      return result;
    }
  }

  getMostSouthern() {
    if (this.list.length > 0) {
      let mostSouthern = this.list[0];
      this.list.forEach((value) => {
        if (value.latitude < mostSouthern.latitude) {
          mostSouthern = value;
        }
      });
      let result = `${mostSouthern.name} with latitude of ${mostSouthern.latitude}`;
      return result;
    }
  }

  getPopulation() {
    try {
      let total = 0;
      this.list.forEach((value) => {
        total += value.population;
      });
      return total;
    } catch (error) {
      throw error;
    }
  }

  async deleteCity(key) {
    try {
      for (let i = 0; i < this.list.length; i++) {
        if (key === this.list[i].key) {
          this.list.splice(i, 1);
          console.log(this.list);
        }
      }
      await functions.postData(this.url + "delete", { key });
    } catch (error) {
      throw error;
    }
  }

  buildCard(city) {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "row");
    div1.setAttribute("key", city.key);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "col-sm-6");
    div2.setAttribute("key", city.key);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("key", city.key);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("key", city.key);
    cardBody.setAttribute("class", "card-body");

    let cityName = document.createElement("h5");
    cityName.setAttribute("class", "card-title");
    cityName.setAttribute("id", "cityName");
    cityName.setAttribute("key", city.key);
    cityName.appendChild(document.createTextNode(city.name));

    let lat = document.createElement("p");
    lat.setAttribute("class", "card-text");
    lat.setAttribute("key", city.key);
    lat.textContent = "Latitude: " + city.latitude;

    let long = document.createElement("p");
    long.setAttribute("class", "card-text");
    long.setAttribute("key", city.key);
    long.textContent = "Longtitude: " + city.longtitude;

    let pop = document.createElement("p");
    pop.setAttribute("class", "card-text");
    pop.setAttribute("id", "idPop");
    pop.setAttribute("key", city.key);
    pop.textContent = "Population: " + city.population;

    let div3 = document.createElement("div");
    div3.setAttribute("class", "input-group");
    let popNum = document.createElement("input");
    popNum.setAttribute("class", "form-control");
    popNum.setAttribute("key", city.key);
    let div4 = document.createElement("div");
    div4.setAttribute("class", "input-group-append");

    let addBtn = document.createElement("button");
    addBtn.setAttribute("class", "btn btn-outline-secondary");
    addBtn.appendChild(document.createTextNode("Move In"));
    addBtn.setAttribute("todo", "addPop");

    addBtn.addEventListener("click", async () => {
      let newPop = city.movedIn(popNum.value);
      console.log(newPop);
      await functions.postData(this.url + "update", {
        key: city.key,
        city: city,
      });

      pop.textContent = "Population: " + newPop;
    });

    let reduceBtn = document.createElement("button");
    reduceBtn.setAttribute("class", "btn btn-outline-secondary");
    reduceBtn.appendChild(document.createTextNode("Move Out"));
    reduceBtn.setAttribute("todo", "reducePop");

    reduceBtn.addEventListener("click", async () => {
      let newPop = city.movedOut(popNum.value);
      console.log(newPop);
      await functions.postData(this.url, "update", {
        key: city.key,
        city: city,
      });

      pop.textContent = "Population: upd";
    });

    let br = document.createElement("br");

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-primary");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.setAttribute("todo", "delete");

    deleteBtn.addEventListener("click", (e) => {
      this.deleteCity(city.key);
      e.target.parentNode.remove();
    });

    div1.appendChild(div2);
    div2.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cityName);
    cardBody.appendChild(lat);
    cardBody.appendChild(long);
    cardBody.appendChild(pop);
    cardBody.appendChild(div3);
    cardBody.appendChild(br);
    cardBody.appendChild(deleteBtn);
    div3.appendChild(popNum);
    div3.appendChild(div4);
    div4.appendChild(addBtn);
    div4.appendChild(reduceBtn);

    return div1;
  }
}

export { City, Community };
