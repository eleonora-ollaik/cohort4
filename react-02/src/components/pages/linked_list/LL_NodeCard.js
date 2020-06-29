import React from 'react'

 function Card(props) {
    console.log(props.node)
    // const [subject, amount] = props.linkedList.show()
    console.log('hello from card')
    return (
        <div className = 'container'>
            <div> {props.node} </div>
            
        </div>
    )
}
 


export default Card;