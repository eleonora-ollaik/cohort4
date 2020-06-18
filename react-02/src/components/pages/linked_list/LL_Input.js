import React, {useState} from 'react'

export default function LL_Input() {
    // const data = props.data;

    const [subject, setSubject] = useState();
    const [amount, setAmount] = useState();

    const onSubChange = (e) => {
        setSubject(e.target.value);
    }

    const onAmChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <div>
            <h2> You can add an item to your Linked List right here:</h2>
            <form className = 'listInput'>
                <input
                type = 'text'
                placeholder = 'Subject'
                value = {subject}
                onChange = {onSubChange} 
                />
                <input
                type = 'number'
                placeholder = 'Amount'
                value = {amount}
                onChange = {onAmChange}
                />

                <button>Save</button>
            </form>
        </div>
    )
}
