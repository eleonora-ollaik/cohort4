import React from 'react';
import './../../../App.css';
import FifoList from './FifoList';
import LifoList from './LifoList';
import { ThemeContext } from '../settings/ThemeContext';

export default function FifoLifoDisplay(props) {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div style={{ color: theme.syntax, background: theme.bg }}>
            <h1>Welcome to Fifo Lifo page</h1>

            <div>
              <input
                type='text'
                placeholder='Queue item'
                id='idFifoName'
                onChange={props.onFifoChange}
              ></input>
              <button todo='queue' onClick={props.onSave}>
                Queue
              </button>
              <input
                type='text'
                placeholder='Stack item'
                id='idLifoName'
                onChange={props.onLifoChange}
              ></input>
              <button todo='stack' onClick={props.onSave}>
                Stack
              </button>
            </div>
            <div className='row'>
              <div
                className='fifoSide'
                style={{ color: theme.syntax, background: theme.bg }}
              >
                <FifoList fList={props.fifoList} onDelete={props.onDelete} />
              </div>

              <div
                className='lifoSide'
                style={{ color: theme.syntax, background: theme.bg }}
              >
                <LifoList lList={props.lifoList} onDelete={props.onDelete} />
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
