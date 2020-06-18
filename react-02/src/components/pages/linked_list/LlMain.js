import React, {useEffect, useState} from 'react'
import LlInput from './LL_Input';
import LinkedList from './business_logic/LinkedList.js'

export default function LlMain() {
    // useEffect(() => {
    //     // This effect will run any time a state variable changes
    //     console.log('----useEffect: general');
    //   });
    
    console.log('Hello from Linked List');

    return (
        <React.Fragment>
            <h1>Welcome to Linked List Page</h1>
            <LlInput />
        </React.Fragment>
    )
}
