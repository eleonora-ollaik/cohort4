import React from 'react'

export default function NavBar(props) {

    // function checkCurrent() {
    //     if (!props.node.currentNode) {
    //         return 'No items in the list'
    //     } 
    //     while (props.node.currentNode){
    //         // console.log(props.node.currentNode.subject)
    //         return `${props.node.currentNode.subject}: ${props.node.currentNode.amount}`
    //     }
    // }

    function checkPrevious() {
        let node = props.node.get()
        if (node === null || node.previous === null) {
            return;
        }
        else {
            return node.previous.subject
        }
    }
    function checkNext() {
        let node = props.node.get()
        if (node === null || node.next === null) {
            return;
        }
        else {
            return node.next.subject;
        }
    }
    return (
        <div>
            <div>
                <button todo='head'>Head</button>
                <button todo='prev'>Previous: {checkPrevious()}</button>
                <button todo='next'>Next: {checkNext()}</button>
                <button todo='tail'>Tail</button>
            </div>

            <div className = 'summary'>
                <h2>Current item: {props.checkCurrent()}  </h2> 
                
                <br />
                <button onClick={props.onDelete}>Delete Current</button> 
                <button onClick={props.onClear}>Clear List</button> 

                <br />
                <h2>Current total of all accounts: {props.total}</h2>
            </div>
            
            
        </div>
    )
}
