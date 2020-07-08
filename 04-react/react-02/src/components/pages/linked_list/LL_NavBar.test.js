import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import NavBar from './LL_NavBar'
import ll from '../linked_list/business_logic/LinkedList'


const mockCallback = jest.fn();
let data = [['a', 1], ['b', 2], ['c', 3] ]

beforeEach(() => {
    let list = new ll.LinkedList();
    data.forEach((value) => list.insertNode(value[0], value[1]));

})

test ('navbar', () => {
render(<NavBar 
    checkCurrent={list.currentNode}
    ll = {list}
    total = {list.total}
    onDelete ={onDelete}
    onClear = {onClear}/>)
expect(screen.getByText('Current item:'))
})
