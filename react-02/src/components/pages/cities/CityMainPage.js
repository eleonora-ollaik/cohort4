import React, {Component} from 'react'
import CityForm from './CityForm'
import commfunc from './business_logic/Communities.js'
import CityList from './CityList';
// import func from './business_logic/fetch'


class CityMainPage extends Component {

    constructor() {
        super();
        this.state ={
            list: [],
            northern:'',
            southern:'',
            totalPop: '',
            comm : new commfunc.Community()

        };
        this.url = 'http://127.0.0.1:5000/';
    }

    async componentDidMount() {
        await this.state.comm.updateComm();
        this.setState({ comm: this.state.comm})
    }
  
    onAdd = (city) =>{
    city = this.state.comm.createCity(
        city.name, Number(city.latitude), Number(city.longtitute), Number(city.population)
    );
    this.setState({ list: this.state.comm.list})
    };

    randomCity = async () => {
        await this.state.comm.randomCity();
        this.setState({ list: this.state.comm.list})
    }

    handleMoveIn = async (city,people) =>{
        await this.state.comm.moveIn(city,Number(people));
        this.setState({list: this.state.comm.list});

    }

    handleMoveOut = async (city, people) => {
        await this.state.comm.moveOut(city, Number(people));
        this.setState({list: this.state.comm.list});
    }


    handleDelete = async (key) => {
        this.state.comm.deleteCity(key);
        this.setState({
            list: this.state.comm.list
        })
    }


render(){
    const mostNorthern = this.state.comm.getMostNorthern();
    const mostSouthern = this.state.comm.getMostSouthern();
    const totalPopulation = this.state.comm.getPopulation();

    return (
        <div>
            <header> Welcome to Cities and Communities Page</header>
            <CityForm
            handleOnAdd = {this.onAdd} 
            handleRandom = {this.randomCity}
            />

            <div id = 'idCityInfo'>
                <h2>The most northern city is: {mostNorthern} </h2>
                <h2>The most southern city is: {mostSouthern}</h2>
                <h2>Total population of cities you entered is: {totalPopulation} </h2>
            </div>
            <CityList 
            list = {this.state.list}
            comm = {this.state.comm}
            handleMoveIn = {this.handleMoveIn}
            handleDelete = {this.handleDelete}
            handleMoveOut = {this.handleMoveOut}
            />
            
            
        </div>
    )
}
}

export default CityMainPage;