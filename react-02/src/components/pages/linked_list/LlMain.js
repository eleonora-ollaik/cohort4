import React, {useEffect, useState} from 'react';
import LlInput from './LL_Input';
import ll from './business_logic/LinkedList.js';
import List from './LL_List';
import NavBar from './LL_NavBar'

let linkedList = new ll.LinkedList();

export default function LlMain() {

    let [current, setCurrent] = useState('');
    let [total, setTotal] = useState('')
    let [todo, setTodo] = useState('')
    // let cards = [];
// console.log(todo)
    // useEffect(() => {
    //     // This effect will run any time a state variable changes
    //     console.log('----useEffect: general');
    //   });
    

    const insertNew = (subject, amount) => {
        let node = linkedList.insertNode(subject, amount);
        setCurrent(node);
        setTotal(linkedList.total())
        console.log(linkedList)
        // setTodo(null)
        // console.log(todo)
    }

     const onClick = (e) => {
         let todo = e.target.getAttribute('todo');
         console.log(todo)
         if (todo) {
             setTodo(todo)
         }
        
        if (todo === 'head'){
            linkedList.first();
            setCurrent(linkedList.currentNode);
        }
        else if (todo === 'tail'){
            linkedList.last();
            setCurrent(linkedList.currentNode);
        }
        else if (todo === 'next'){
            linkedList.next();
            setCurrent(linkedList.currentNode);
        }
        else if (todo === 'previous') {
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
                onNav={onClick}
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
