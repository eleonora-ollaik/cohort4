import React from 'react';
import logo from './logo.svg';
import SVG from './components/icons'
import './App.css';

class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      logoClick : 0
    };
  }

  handleClick = (number) => {
    this.setState({
      logoClick : number
      
    })
  }

  render() {
  return (
    <div className="App">
        <SVG handleClick = {this.handleClick}/>
        {this.state.logoClick === 0}
        {this.state.logoClick === 1}
        {this.state.logoClick === 2}
        {this.state.logoClick === 3}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
