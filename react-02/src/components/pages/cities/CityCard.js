import React, { Component } from 'react'


export class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // key: this.props.city.key,
            people: '',
        };
    }

    onChange = (e) => this.setState({ people: parseInt(e.target.value) });

    onMoveIn = (e) => {
        e.preventDefault();
        this.props.handleMoveIn(this.props.city.key, this.state.people);
        console.log(this.props.city.key)
        this.setState({people:''})
    }

    onMoveOut = (e) => {
        this.props.handleMoveOut(this.props.city.key, this.state.people);
        this.setState({people:''})
        e.preventDefault();
    }


    onDelete = (e) => {
        this.props.handleDelete(this.props.city.key)
        e.preventDefault();
    }

    render() {
        return (
            <div className = 'card' key = {this.props.city.key}>
                <span>City Name: {this.props.city.name}</span><br />
                <span>City latitude: {this.props.city.latitude} </span><br />
                <span>City longitude: {this.props.city.longtitude} </span><br />
                <span>City population: {this.props.city.population} </span><br />

                <input 
                name = 'people' 
                type = 'text'
                onChange = {this.onChange}
                />

                <button onClick ={this.onMoveIn}>
                Move In
                </button>

                <button onClick = {this.onMoveOut}>
                Move Out
                </button>

                <button onClick = {this.onDelete}>
                Delete
                </button>


            </div>
        )
    }
}

export default CityCard
