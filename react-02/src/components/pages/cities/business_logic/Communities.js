import functions from './fetch.js';
import randomData from './RandomCities';


class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        try {
            return `${this.name} has a latitude of ${this.latitude} and a longitude of ${this.longitude} and a population of ${this.population}`
        } catch (error) {
            throw (error);
        }
    }

    movedIn(num) {
            this.population = this.population + Number(num);
            return this.population;
    }

    movedOut(num) {
        try {
            this.population -= Number(num);
            return this.population;
        } catch (error) {
            throw (error);
        }
    }

    currentPop() {
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
                default:

                return 'No population at the moment';
            
            }
    
    }
}

class Community {
    constructor() {
        this.url = 'http://127.0.0.1:5000/';
        this.list = [];
        this.counter = this.list.length;
    }

    getNewCity() {
        return new City();
    }

    get(key) {
        return this.list[key];
    }

    nextKey() {
        return this.counter++;
    }


    async createCity(name, latitude, longitude, population) {
        let key = this.nextKey()
        let city = new City(key, name, latitude, longitude, population);
        this.list.push(city);
        // k++;
        // console.log(this.list);
        console.log(this.url, city);


        let data = await functions.postData(this.url + 'add', city);
        console.log(data);

        console.log(data);
        this.counter++;

    }

    async randomCity () {
        let cities = Object.values(randomData);
        let city = (Math.random() * cities.length);
        let randomC = cities.splice(Number(city), 1);
        await randomC.forEach(value => { 
        let key = this.finalKey();
        let cityR = new City(key, value.name, Number(value.latitude), Number(value.longitude), Number(value.population));
        this.list.push(cityR)
        let data = functions.postData(this.url + 'add', cityR);
            console.log(data);
        // this.list[city.key] = city;
    })
    this.counter = this.finalKey();
    return this.list
    }

 
async getCommunity() {
    let data = await functions.postData(this.url + 'all');
    if (data.status === 200) {
        console.log('Got the community')
        data.forEach(value => {
            if(this.list.findIndex(element => element.key === value.city.key) === -1) {
                this.list.push(new City(value.city.key, value.city.name, value.city.latitude, value.city.longitude, value.city.population))
            if(value.city.key >= this.counter) this.counter = value.city.key +1;
            }
        })
    } 
}

    // async getCommunity() {
    //     try {
    //         let data = await functions.postData(this.url + 'all');
    //         if (data.length > 0) {
    //             // console.log(data.status);
    //             this.list = [];
    //             this.list = await JSON.parse(JSON.stringify(data));
    //             return this.list;
    //         }
    //         return 'error';
    //     }
    //     catch (error) {
    //         throw (error);
    //     }
    // }



    getLocal(key) {
        for (let i = 0; i < this.list.length; i++) {
            if (key === this.list[i].key) {
                let city = this.list[i];
                console.log(city);
                return city;
            }
        }

    }

    getPop(key) {
        for (let i = 0; i < this.list.length; i++) {
            if (key === this.list[i].key) {
                let pop = this.list[i].population;
                console.log(pop);
                return pop;
            }
        }

    }


    async updateComm () {
        let data = await functions.postData(this.url + 'all');
        data.forEach(value => {
            this.list.push(new City(value.key, value.name, Number(value.latitude), Number(value.longitude), Number(value.population)));

        });
        this.counter = this.finalKey();
        return this.list;
    }

    finalKey() {
        let newKey = 0;
        if(this.list.length > 0) {
            this.list.forEach(value => {
                if (value.key > newKey) {
                    newKey = value.key;
                }
            })
        }
        return newKey + 1;
    }

    async moveIn(key, num){
        let theUrl;
        let city1 = this.getLocal(key);
        city1.movedIn(Number(num))
        theUrl = this.url + 'update'
        await functions.postData(theUrl, city1);
    }


    async moveOut(key, num) {
        let theUrl;
        let city = this.getLocal(key);
        city.movedOut(Number(num));
        theUrl = this.url + 'update';
        await functions.postData(theUrl, city)
    }

    whichSphere(key) {
        try {
            for (let i = 0; i < this.list.length; i++) {
                if (key === this.list[i].key) {
                    let result = this.list[i].latitude;

                    // return result;
                    if (result > 0) {
                        return 'Northern Hemisphere';
                    } else if (result < 0) {
                        return 'Southern Hemisphere';
                    } else if (result === 0) {
                        return 'Equator';
                    }
                }
            }

        } catch (error) {
            throw (error);
        }
    }

    getMostNorthern() {
        if (this.list.length > 0) { 
        let mostNorthern = this.list[0];
        this.list.forEach(value => {
            if (value.latitude > mostNorthern.latitude) {
            mostNorthern = value;
            }
        })
        let result = `${mostNorthern.name} with latitude of ${mostNorthern.latitude}`
        return result;
    }
    }


    getMostSouthern() {
        if (this.list.length > 0) {
            let mostSouthern = this.list[0];
            this.list.forEach(value => {
                if (value.latitude < mostSouthern.latitude) {
                    mostSouthern = value;
                }
            })
            let result = `${mostSouthern.name} with latitude of ${mostSouthern.latitude}`;
            return result;
        }
    }

    getPopulation() {
        try {
            let total = 0;
            this.list.forEach(value => {
                total += value.population;

            })
            return total;
        } catch (error) {
            throw (error);
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
            await functions.postData(this.url + 'delete', { key });
        } catch (error) {
            throw (error);
        }
    }



}



export default { City, Community };