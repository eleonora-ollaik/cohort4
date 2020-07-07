import logo from '../../../logo.svg';

import React, { Component } from 'react';
import { ThemeContext } from '../settings/ThemeContext';

export default class Homepage extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div style={{ color: theme.syntax, background: theme.bg }}>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    );
  }
}
