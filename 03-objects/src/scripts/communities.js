class City {
    constructor(key, name, latitude, longtitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.population = population;
    }

    show() {
        return `${this.name} has a latitude of ${this.latitude} and a longtitude of ${this.longtitude} and a population of ${this.population}`
    }

    movedIn(num) {
        this.population += Number(num);
        return this.population;
    }

    movedOut(num) {
        this.population -= Number(num);
        return this.population;
    }

    howBig() {
        switch (true) {
            case (this.population > 100000):
                return 'City';
            case (this.population > 20000):
                return 'Large Town';
            case (this.population > 1000):
                return 'Town';
            case (this.population > 100):
                return 'Village';
            case (this.population < 100):
                return 'Hamlet';
        }
        return 'No population at the moment';
    }
}

class Community {
    constructor() {
        this.list = []
        this.counter = 1;
    }

    // Setting up a dynamic key for each City

    nextKey() {
        return `k${this.counter++}`;
    }

    createCity(name, latitude, longtitude, population) {
        const key = this.nextKey();
        let city = new City(key, name, latitude, longtitude, population);
        this.list.push(city);
    }

    whichSphere(city) {
        if (city.latitude > 0) {
            return 'Northern Hemisphere';
        } else {
            return 'Southern Hemisphere';
        }

    }

    getMostNorthern() {
        let mostNorthern = 0;
        let mostNorthernName
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].latitude > mostNorthern) {
                let currentName = this.list[i].name;
                mostNorthern = Number(this.list[i].latitude);
                mostNorthernName = currentName;
            }
        } if (mostNorthern > 0) {
            return `${mostNorthernName} is the most Northern city with latitude of ${mostNorthern}`;
        } else {
            return 'Seems like all the cities you added are in Southern Hemisphere'
        }
    }

    getMostSouthern() {
        let mostSouthern = this.list[0];
        this.list.forEach(value => {
            if (value.latitude < mostSouthern.latitude) {
                mostSouthern = value;
            }
        })
        return mostSouthern.name;
    }

    getPopulation() {
        let total = 0;
        this.list.forEach(value => {
            total += value.population;

        })
        return total;
    }

    deleteCity(key) {

        for (let i = 0; i < this.list.length; i++) {
            if (key === this.list[i].key) {
                this.list.splice(i, 1);
            }
        }

    }
}

export { City, Community };