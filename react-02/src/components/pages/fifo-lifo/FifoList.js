import React from 'react'

export default function FifoList(props) {
    //     console.log(props.list)
    //     for (let i = 0; i < props.list.length; i++) {
            // console.log(props.list[i])

        let fifoItem;
            if (props.fList) {

        fifoItem =
            props.fList.map((value, i) => {
            return (
                <li key = {i}> {value} </li>
            )
    })
        } else {
            return 'No items'
        } 

    return (
        <div>
           <h2> Queue </h2>
            {fifoItem} 
        <button todo='deleteQueue' onClick={props.onDelete}>Remove Item</button>
        </div>
    )
}
