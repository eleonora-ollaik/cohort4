import React from 'react';
import Card from './LL_NodeCard';

export default function LL_List(props) {

    // const list = [];

    // for (let i = 0; i < linkedList.size; i++){
    //     console.log(linkedList.currentNode)

    //     list.push(
    //         <Card 
    //         node = {linkedList[i]}
    //         />
    //     );
    // }

    let listItem =
            props.list.map((node, i) => {
            return (
                <li key = {i}>{node.subject}: {node.amount} </li>
            )
            })
    
    return (
        <div>
            <h1> Nodes List: {listItem} </h1>

        </div>
    )

    
}
