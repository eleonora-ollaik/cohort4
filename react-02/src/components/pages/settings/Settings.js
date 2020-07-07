import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext.js';

class Settings extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const {toggleTheme} = this.context;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    // const {theme , toggleTheme} = this.context;
    return (
      <div style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Settings</h1>
        <h2> Change theme </h2>
        <button
          onClick={toggleTheme}
          // style ={{background: theme.background}, {margin: 5}}
        >
          Light/Dark
        </button>
        <h2>Current theme: </h2>
      </div>
      //      )}

      // </ThemeContext.Consumer>
    );
  }
}

export default Settings;
