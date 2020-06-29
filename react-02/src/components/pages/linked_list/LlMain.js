import React, {useState} from 'react';
import LlInput from './LL_Input';
import ll from './business_logic/LinkedList.js';
import List from './LL_List';
import NavBar from './LL_NavBar'
// import Card from './LL_NodeCard'

let linkedList = new ll.LinkedList();

export default function LlMain() {

    let [current, setCurrent] = useState('');
    let [total, setTotal] = useState('')
    let [todo, setTodo] = useState('')
    // const list = [];

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
        console.log(node)
        // for (let i = 0; i < linkedList.size; i++){
        //     list.push(
        //         <Card 
        //         node = {node}
        //         // key = {counter}
        //         />
        //     );
        //     // currentN = linkedList.currentNode.next;
        // }
        return node;

        // setTodo(null)
        // console.log(todo)
    }

     const onClick = (e) => {
         let todo = e.target.getAttribute('todo');
        //  console.log('Hello', todo)
         if (todo) {
             setTodo({todo})
            //  console.log('hi from todo')
         }
        
        if (todo === 'head'){
            linkedList.first();
            // setCurrent(linkedList.currentNode);
        }
        else if (todo === 'tail'){
            linkedList.last();
            // setCurrent(linkedList.currentNode);
        }
        else if (todo === 'next'){
            linkedList.next();
            // setCurrent(linkedList.currentNode);
        }
        else if (todo === 'prev') {
            // console.log('hi from prev')

            let prev = linkedList.previous();
            // console.log(linkedList.currentNode)
            setCurrent(linkedList.currentNode);
            // console.log(linkedList.currentNode)
            return prev;
    }
    }
    

    return (
        <React.Fragment>
            <h1>Welcome to Linked List Page</h1>
            <LlInput
            insertN={insertNew} node={setCurrent} linkedList = {linkedList}/>

            <div className = 'navBar' onClick = {onClick}>
                <NavBar 
                // onNav={onClick}
                node = {linkedList}
                total = {total}
                />
            </div>

            <List


            linkedList = {linkedList}
            // node = {current}
            // setCurrent = {setCurrent}
            />
        </React.Fragment>
    )
}
