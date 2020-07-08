import React from 'react';
import {fireEvent, render, screen, act, getByText} from '@testing-library/react';
import LLInput from './LL_Input';
import func from './business_logic/LinkedList'

test ('input iterface', () => {
    const mockDataInputClick = jest.fn();

    const ll = new func.LinkedList();

    render(<LLInput
        insertN = {mockDataInputClick} />);

        screen.getByText(/Save/i);

        let subject = document.getElementById('idSubject');
        subject.value = 'A';

        let amount = document.getElementById('idAmount');
        amount.value = 15;
        ll.insertNode(subject, amount);

        screen.debug();

        // const button = getByText('Save')
        expect(mockDataInputClick.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText(/save/i))
        expect(mockDataInputClick.mock.calls.length).toBe(1);

})

