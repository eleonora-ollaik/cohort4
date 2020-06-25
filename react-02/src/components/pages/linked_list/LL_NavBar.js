import React from 'react'

export default function NavBar(props) {
    // console.log(props)
    // // console.log(node.currentNode)
    // function handleHeadNav() {
    //     onNav('head');
    // }

    // function handleTailNav() {
    //     onNav('tail');
    // }

    // function handleNext() {
    //     onNav('next');
    // }

    // function handlePrevious() {
    //     onNav('previous');
    // }

    function checkCurrent() {
        if (!props.node.currentNode) {
            return 'No items in the list'
        } 
        while (props.node.currentNode){
            // console.log(props.node.currentNode.subject)
            return `${props.node.currentNode.subject}: ${props.node.currentNode.amount}`
        }
    }

    return (
        <div>
            <div>
                <button todo='head'>Head</button>
                <button todo='prev'>Previous</button>
                <button todo='next'>Next</button>
                <button todo='tail'>Tail</button>
            </div>

            <div className = 'summary'>
                <h2>Current item: {checkCurrent()}  </h2> <br />
                <h2>Current total of all accounts: {props.total}</h2>
            </div>
            
        </div>
    )
}
