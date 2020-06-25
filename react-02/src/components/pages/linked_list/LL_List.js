import React, {useState} from 'react';
import LinkedList from './business_logic/LinkedList';
// import NavBar from './LL_NavBar';
import Card from './LL_NodeCard';

export default function LL_List({linkedList, node, setCurrent}) {

    // const [list, setList] = useState(linkedList);
    // const [size, setSize] = useState(0);
    // let counter = 0;
    // let currentN = linkedList.headNode
    const list = [];
    // while (currentN) {
    //     counter++;

    for (let i = 0; i < linkedList.size; i++){
        list.push(
            <Card 
            node = {node}
            // key = {counter}
            />
        );
        // currentN = linkedList.currentNode.next;
    }


    
    return (
        <div>
            <h1> Nodes List: {list} </h1>

        </div>
    )

    
}
