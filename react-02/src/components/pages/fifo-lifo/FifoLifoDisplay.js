import React from 'react';
import './../../../App.css';
import FifoList from './FifoList';
import LifoList from './LifoList';
import { ThemeContext } from '../settings/ThemeContext';

export default function FifoLifoDisplay(props) {
  // let listOfFifo;
  // if (props.list) {
  //     console.log(props.list)
  //     for (let i = 0; i < props.list.length; i++) {
  //         console.log(props.list[i])
  //         return (
  //             <li> {props.list[i]} </li>
  //         )
  //     }
  // }

  //    function onChange (e) {
  //         this.setState({ [e.target.name]: e.target.value });
  //    }
  // let fifo;
  // if (props.fifo) {
  //     fifo =
  // }
  // const fifoList = [];
  // console.log(props.fifo)

  // function listEl () {
  //     this.props.fifo.map ((props) => (
  //         <h2>{props.fifoNode.value}</h2>
  //     )

  // )
  // console.log(props.fifoNode.value)

  // }
  // const fifoList = [];

  // for (let i = 0; i < props.fifoCtrl.size; i++) {
  //     console.log(props.fifo)
  //     fifoList.push(
  //     <li>{props.fifo}</li>
  //     )
  // }
  // const addCard = () => {
  // }
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div>
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
              <div className='fifoSide'>
                <FifoList fList={props.fifoList} onDelete={props.onDelete} />
              </div>

              <div className='lifoSide'>
                <LifoList lList={props.lifoList} onDelete={props.onDelete} />
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

// const queueStyle = {
//     float: 'left',
//     width: '50%'
// };

// const stackStyle = {
//     float: 'right',
//     width: '50%'
// };
