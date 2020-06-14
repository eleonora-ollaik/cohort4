import React, { Component } from "react";

class CityList extends Component {

    // let listOfCities;
    // if (props.list) {
    //     listOfCities = Object.keys(props.list).map(k => {
    //         const c = props.list[k];
    //         return (
    //             <li key = {c.key}>{c.name}</li>
    //         )
    //     })
    // }
    // function onClick(e) {
    //     props.showOne(e.target.getAttribute('key'))
    // }

    // const onAdd = () => {
    //     props.onAdd();
    // }
    render(){
        console.log(this.props.cities);
        const cityList= this.props.cities.map((city, i) => {

    return (
        <div>
            <h1>List of Cities</h1>
            <ul className = 'cityList'>
                {city}
            </ul>
        </div>
    )
})
return <div>{cityList}</div>
    }
}

export default CityList;