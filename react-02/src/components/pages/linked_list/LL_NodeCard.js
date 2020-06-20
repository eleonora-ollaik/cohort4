import React, {useState} from 'react'

export default function LL_NodeCard({node, key}) {
    // const [subject, amount] = node.show()

    return (
        <div className = 'container'>
            <div>{key} {node.subject}: {node.amount} </div>
            
        </div>
    )
}
