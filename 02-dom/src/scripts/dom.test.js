import functions from './dom.js';


// test ('Show a list', () => {
//     expect (functions.showList('Item 4')).toBeInstanceOf('center')
// });

test ('Add listed item to the list', () => {
    expect (functions.createListElement('Item 4')).toBeInstanceOf('list')
});