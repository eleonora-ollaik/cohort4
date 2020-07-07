import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
    }

    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }
    render() {
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>

        );
    }
}
// const Themes = {
//     lightMode: {
//         name: 'Light Mode',
//         background: '#EEE',
//         color: '#111'
//     },
//     darkMode: {
//         name: 'Dark Mode',
//         background: '#111',
//         color: '#EEE'
//     }
// }



// const ThemeContext = React.createContext({
//     theme: Themes.lightMode,
//     toggleTheme: () => {}
// });

export default ThemeContextProvider;
// export {ThemeContext, Themes};