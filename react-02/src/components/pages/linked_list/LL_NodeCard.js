import React, {useState} from 'react'

export default function LL_NodeCard(props) {
    // const [subject, amount] = node.show()

    return (
        <div className = 'container'>
            <div> {props.node.subject}: {props.node.amount} </div>
            
        </div>
    )
}
