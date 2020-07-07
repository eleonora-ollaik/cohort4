import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext.js';

class Settings extends Component {
  static contextType = ThemeContext;


  render() {
    // console.log(this.context);
    const { toggleTheme } = this.context;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    
    return (
      <div style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Settings</h1>
        <h2> Change theme </h2>
        <button onClick={toggleTheme}>Light/Dark</button>
        <h2>Current theme: </h2>
      </div>
    );
  }
}

export default Settings;
