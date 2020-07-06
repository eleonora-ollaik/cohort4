import React, {useContext} from 'react'
import {ThemeContext, Themes} from './ThemeContext.js';

class Settings extends React.Component  {
    static contextType = ThemeContext;
render () {
const {theme , toggleTheme} = this.context;
    return (
        // <ThemeContext.Consumer>
        //      {({ toggleTheme }) => (
                <div>
                    <h1>Settings</h1>
                    <h2> Change theme </h2>
                    <button
                    onClick = {toggleTheme}
                    style ={{background: theme.background}}
                    >
                        Light/Dark
                    </button>
                    <h2>Current theme: {theme.name} </h2>
                </div>
        //      )} 

        // </ThemeContext.Consumer>
    )
    }
}

export default Settings;
