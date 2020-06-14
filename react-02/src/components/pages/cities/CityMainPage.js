import React, {Component} from 'react'
import CityForm from './CityForm'
import commfunc from './business_logic/Communities.js'
import CityList from './CityList';


class CityMainPage extends Component {

    constructor() {
        super();
        this.state ={
            list: []
            
        };
        this.url = 'http://127.0.0.1:5000/';
        this.comm = new commfunc.Community();
    }

    onAdd = (city) =>{
    city = this.comm.createCity(
        city.name, Number(city.latitude), Number(city.longtitute), Number(city.population)
    );
    this.setState({ list: this.comm.list})
    };


render(){
    return (
        <div>
            <header> Welcome to Cities and Communities Page</header>
            <CityForm
            handleOnAdd = {this.onAdd} 
            />
            
            {/* <CityList 
            list={list}
            //  list = {cityCtrl.list}
            //  showOne = {onShow}
            //  add = {onAdd}
             /> */}
            
            
        </div>
    )
}
}

export default CityMainPage;