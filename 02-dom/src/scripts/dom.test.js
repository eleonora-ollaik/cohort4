import functions from './dom.js';

test ('Add listed item to the list', () => {
    expect (functions.createListElement('Item 4')).toBeInstanceOf('center')
});