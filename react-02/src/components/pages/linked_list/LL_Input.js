import React, {useState} from 'react'

export default function LL_Input(props) {

    const [subject, setSubject] = useState('');
    const [amount, setAmount] = useState('');

    const onSubChange = (e) => {
        setSubject(e.target.value);
    }

    const onAmChange = (e) => {
        setAmount(e.target.value);
    }


    function insertNew  (e)  {
        e.preventDefault() 
        let node = props.insertN(subject, amount);
        console.log(node.subject)
        if (subject && amount) {
            setSubject('');
            setAmount('');
        }
    }



    return (
        <div>
            <div>
            <h2> You can add an item to your Linked List right here:</h2>
                <input
                type = 'text'
                placeholder = 'Subject'
                onChange = {onSubChange} 
                />
                <input
                type = 'number'
                placeholder = 'Amount'
                
                onChange = {onAmChange}
                />

                <button onClick = {insertNew}>Save</button>
        </div>
    
        </div>
    )
}
