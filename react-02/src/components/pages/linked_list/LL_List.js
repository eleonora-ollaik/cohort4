import React from 'react';
import Card from './LL_NodeCard';

export default function LL_List({linkedList}) {

    const list = [];

    for (let i = 0; i < linkedList.size; i++){
        console.log(linkedList.currentNode)

        list.push(
            <Card 
            node = {linkedList[i]}
            />
        );
    }


    
    return (
        <div>
            <h1> Nodes List: {list} </h1>

        </div>
    )

    
}
