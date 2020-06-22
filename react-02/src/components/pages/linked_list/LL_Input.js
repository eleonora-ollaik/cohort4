import React, {useState} from 'react'

export default function LL_Input(props) {
    // const data = props.data;

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
        props.insertN(subject, amount);
        if (subject && amount) {
            setSubject('');
            setAmount('');
        }
    }

    return (
        <div>
            <h2> You can add an item to your Linked List right here:</h2>
            {/* <form className = 'listInput'> */}
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
            {/* </form> */}
        </div>
    )
}
