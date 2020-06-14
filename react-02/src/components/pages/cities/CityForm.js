import React, { Component } from "react";

class CityForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            latitute: '',
            longtitute: '',
            population: ''
        };
    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onAdd = (e) => {
        e.preventDefault();
        const city = {
            name: this.state.name,
            latitude: parseInt(this.state.latitute),
            longtitute: parseInt(this.state.longtitute),
            population: parseInt(this.state.population)

        };
        this.props.handleOnAdd(city);
        this.setState({ name: '', latitude: '', longtitude: '', population: '' });

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
                        value = {this.state.latitute}
                        onChange = {this.onChange}

                        />
                        <input 
                        type = 'number'
                        name ='longtitute'  
                        placeholder = 'Longitude'
                        value = {this.state.longtitute}
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
                </form>
            </div>
        )
        } 
}


export default CityForm
