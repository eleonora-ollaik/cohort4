import React, { Component } from "react";

class CityForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            latitude: '',
            longitude: '',
            population: ''
        };
    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onAdd = (e) => {
        e.preventDefault();
        const city = {
            name: this.state.name,
            latitude: parseInt(this.state.latitude),
            longitude: parseInt(this.state.longitude),
            population: parseInt(this.state.population)

        };
        this.props.handleOnAdd(city);
        this.setState({ name: '', latitude: '', longitude: '', population: '' });

    }

    onRandom = (e) => {
        e.preventDefault();
        this.props.handleRandom();
    }

    render(){
        return (
            <div>
                <form id = 'idCityForm' onSubmit={this.onAdd}>
                    <h1>Cities and communities</h1>
                    <h2>Add a new city to the list:</h2>

                    <div>
                        <input 
                        type = 'text'
                        name ='name' 
                        placeholder = 'City name'
                        value = {this.state.name}
                        onChange = {this.onChange}
                        />
                        <input 
                        type = 'number'
                        name ='latitude'  
                        placeholder = 'Latitude'
                        value = {this.state.latitude}
                        onChange = {this.onChange}

                        />
                        <input 
                        type = 'number'
                        name ='longitude'  
                        placeholder = 'Longitude'
                        value = {this.state.longitude}
                        onChange = {this.onChange}

                        />
                        <input 
                        type = 'number'
                        name ='population'  
                        placeholder = 'Population'
                        value = {this.state.population}
                        onChange = {this.onChange}

                        />
                    </div>

                    <button type = 'submit' >Add new city</button>
                    <button onClick = {this.onRandom}> Generate Random City</button>
                </form>
            </div>
        )
        } 
}


export default CityForm
