import React from 'react'
import './../../../App.css'

export default function FifoLifoDisplay(props) {

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
    return (
        <div>
            <h1>Welcome to Fifo Lifo page</h1>

            <div>
                <input type='text' placeholder='Queue item' onChange={props.onFifoChange} value ={props.fifoNode}></input>
                <button onClick={props.onSave}>Queue</button>
                <input type='text' placeholder='Stack item'></input>
                <button>Stack</button>

            </div>
            <div className='row'>
            <div className='fifoSide'>
                <h2> Queue </h2>
                {props.fifo} 
            </div>

            <div className='lifoSide' >
                <h2> Stack </h2>
                
            </div>
            </div>
        </div>
    )

}

// const queueStyle = {
//     float: 'left',
//     width: '50%'
// };

// const stackStyle = {
//     float: 'right',
//     width: '50%'
// };
