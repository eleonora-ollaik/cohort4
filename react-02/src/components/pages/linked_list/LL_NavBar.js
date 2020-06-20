import React from 'react'

export default function NavBar({onNav, node, total}) {

    // console.log(node.currentNode)
    function handleHeadNav() {
        onNav('head');
    }

    function handleTailNav() {
        onNav('tail');
    }

    function handleNext() {
        onNav('next');
    }

    function handlePrevious() {
        onNav('previous');
    }

    function checkCurrent() {
        if (!node.currentNode) {
            return 'No items in the list'
        } 
        while (node.currentNode){
            console.log(node.currentNode.subject)
            return `${node.currentNode.subject}: ${node.currentNode.amount}`
        }
    }

    return (
        <div>
            <div className = 'row'>
                <button onClick = {handleHeadNav}>Head</button>
                <button onClick = {handleTailNav}>Tail</button>
                <button onClick = {handleNext}>Next</button>
                <button onClick = {handlePrevious}>Previous</button>

            </div>

            <div className = 'summary'>
                <h2>Current item: {checkCurrent()}  </h2> <br />
                <h2>Current total of all accounts: ${total}</h2>
            </div>
            
        </div>
    )
}
