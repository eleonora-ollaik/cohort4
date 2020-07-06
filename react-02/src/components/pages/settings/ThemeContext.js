import React from 'react';

const Themes = {
    lightMode: {
        name: 'Light Mode',
        background: '#EEE',
        color: '#111'
    },
    darkMode: {
        name: 'Dark Mode',
        background: '#111',
        color: '#EEE'
    }
}



const ThemeContext = React.createContext({
    theme: Themes.lightMode,
    toggleTheme: () => {}
});


export {ThemeContext, Themes};