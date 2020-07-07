import React, { Component } from "react";
import CityCard from './CityCard';

class CityList extends Component {

    render(){ 

    return this.props.comm.list.map((city) => (
        <div>
            <h1>{city.name}</h1>

            <CityCard
            key = {city.key}
            city ={city}
            comm = {this.props.comm}
            onChange = {this.props.onChange}
            handleMoveIn = {this.props.handleMoveIn}
            handleMoveOut = {this.props.handleMoveOut}
            handleDelete = {this.props.handleDelete}
            />
        </div>
    ))
// return <div>{cityList}</div>
    }
}

export default CityList;