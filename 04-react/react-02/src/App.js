import React from 'react';
import Header from './components/layout/Header.js';
import './App.css';
import HomePage from './components/pages/homepage/Homepage.js'
import TicTacToe from './components/pages/tic-tac-toe/tictactoe.js';
import AccountsMain from './components/pages/bank/AccountsMain.js';
import CityMain from './components/pages/cities/CityMainPage.js';
import LlMain from './components/pages/linked_list/LlMain.js';
import FifolifoMain from './components/pages/fifo-lifo/FifolifoMain.js';
import ThemeContextProvider from './components/pages/settings/ThemeContext';
import Settings from './components/pages/settings/Settings.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logoClick: 0,
    };
  }

  handleClick = (number) => {
    this.setState({
      logoClick: number,
    });
    // console.log(this.state);
  };

  render() {

    return (
      <ThemeContextProvider>
          <div className='App'>
            <div className='container'>
              <Header handleClick={this.handleClick} />
              {this.state.logoClick === 0 && <HomePage />}
              {this.state.logoClick === 1 && <TicTacToe/>}
              {this.state.logoClick === 2 && <AccountsMain/>}
              {this.state.logoClick === 3 && <CityMain/>}
              {this.state.logoClick === 4 && <LlMain/>}
              {this.state.logoClick === 5 && <FifolifoMain/>}
              {this.state.logoClick === 6 && <Settings/>}
            </div>
          </div>
      </ThemeContextProvider>
    );
  }
}
export default App;
