import React from 'react';
import crab from './crab.svg';
import bank from './bank.svg';
import cities from './cities.svg';
import fire from './fire.svg';
import '../App.css';


function SVG (props) {
    return (
        <div className='myIcons'>
        <img onClick = {() => {props.handleClick(0)}} src={crab} alt='logo' className = 'crab'></img>
        <img onClick = {() => {props.handleClick(1)}} src={bank} alt='logo' className = 'crab'></img>
        <img onClick = {() => {props.handleClick(2)}} src={cities} alt='logo' className = 'crab'></img>
        <img onClick = {() => {props.handleClick(3)}} src={fire} alt='logo' className = 'crab'></img>

        </div>
    )
}

export default SVG;