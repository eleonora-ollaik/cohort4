import React, { Component } from 'react'


export class CityCard extends Component {

    render() {
        return (
            <div className = 'card'>
                <span>Account Name</span>
                <span>Latitude:</span>
                <span>Longitude:</span>
                <span>Population:</span>

                <input name = 'people' type = 'text'></input>
                <button>Move In</button>
                <button>Move Out</button>

                <button>Delete</button>


            </div>
        )
    }
}

export default CityCard
