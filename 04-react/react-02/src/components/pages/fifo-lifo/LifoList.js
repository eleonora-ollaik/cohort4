import React from 'react'

export default function LifoList(props) {

    let lifoItem =
            props.lList.map((value, i) => {
            return (
                <li key = {i}> {value} </li>
            )
    })

    return (
        <div>
           <h2> Stack </h2>
            {lifoItem} 
        <button todo='deleteStack' onClick={props.onDelete}>Remove Item</button>
        </div>
    )
}
