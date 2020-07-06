import React from 'react';
import {Link} from 'react-router-dom';
import homepage from '../homepage.svg';
import bank from '../pages/bank/bank.svg';
import cities from '../cities.svg';
import ticTacToe from '../pages/tic-tac-toe/tic-tac-toe.svg';
import linkedList from '../pages/linked_list/sort.svg';
import fifolifo from '../pages/fifo-lifo/fifo-lifo.svg';
import settings from '../pages/settings/settings.svg'


export default function Header (props) {
    return (
        <header style = {headerStyle}>
            <Link to='/'>
            <img onClick = {() => {props.handleClick(0)}} src={homepage} alt='logo' className = 'crab'></img>
            </Link> {' '}
            <Link to = '/tictactoe'>
            <img onClick = {() => {props.handleClick(1)}} src={ticTacToe} alt='logo' className = 'crab'></img>
            </Link>
            <Link to = '/bank'>
            <img onClick = {() => {props.handleClick(2)}} src={bank} alt='logo' className = 'crab'></img>
            </Link>
            <Link to="/cities">
            <img onClick = {() => {props.handleClick(3)}} src={cities} alt='logo' className = 'crab'></img>
            </Link>
            <Link to="/linked_list">
            <img onClick = {() => {props.handleClick(4)}} src={linkedList} alt='logo' className = 'crab'></img>
            </Link>
            <Link to="/fifo_lifo">
            <img onClick = {() => {props.handleClick(5)}} src={fifolifo} alt='logo' className = 'crab'></img>
            </Link>

            <Link to="/settings">
            <img onClick = {() => {props.handleClick(6)}} src={settings} alt='logo' className = 'crab'></img>
            </Link>

        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}