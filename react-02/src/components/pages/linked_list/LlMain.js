import React, {useEffect, useState} from 'react';
import LlInput from './LL_Input';
import ll from './business_logic/LinkedList.js';
import List from './LL_List';
import NavBar from './LL_NavBar'

let linkedList = new ll.LinkedList();

export default function LlMain() {

    let [current, setCurrent] = useState('');
    let [total, setTotal] = useState('')
    // let cards = [];

    // useEffect(() => {
    //     // This effect will run any time a state variable changes
    //     console.log('----useEffect: general');
    //   });
    

    function insertNew (subject, amount) {
        let node = linkedList.insertNode(subject, amount);
        setCurrent(node);
        setTotal(linkedList.total())
        console.log(linkedList)
    }

    function handleNav (nav) {
        
        if (nav === 'head'){
            linkedList.first();
            setCurrent(linkedList.currentNode);
        }
        else if (nav === 'tail'){
            linkedList.last();
            setCurrent(linkedList.currentNode);
        }
        else if (nav === 'next'){
            linkedList.next();
            setCurrent(linkedList.currentNode);
        }
        else if (nav === 'previous') {
            linkedList.previous();
            setCurrent(linkedList.currentNode);
        
    }
    }

    

    return (
        <React.Fragment>
            <h1>Welcome to Linked List Page</h1>
            <LlInput
            insertN={insertNew} node={setCurrent}/>

            <div className = 'navBar'>
                <NavBar 
                onNav={handleNav}
                node = {linkedList}
                total = {total}
                />
            </div>

            <List
            linkedList = {linkedList}
            node = {current}
            setCurrent = {setCurrent}
            />
        </React.Fragment>
    )
}
