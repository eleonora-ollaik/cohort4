import React from 'react';
import { Game } from './TTT.js';
import { ThemeContext } from '../settings/ThemeContext';

export default function TicTacToe() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div style={{ color: theme.syntax, background: theme.bg }}>
            <h1> Welcome to Tic Tac Toe page!</h1>
            <Game />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
