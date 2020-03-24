import functions from './cards.js';


test ('Build a card test', () => {
    const card = functions.buildCard();
    expect (card).toBeTruthy();
});

test ('addBefore function', () => {
    const group = document.createElement('div');
    const card = functions.buildCard('New Card');
    group.appendChild(card);

    expect (group.children.length).toBe(1);

    const text = "New Element";
    functions.addBefore(card, text);
    expect (group.children.length).toBe(2);
    expect (group.children[0].textContent.substr(0,11)).toBe(text);
});

test ('addAfter function', () => {
    const group = document.createElement('div');
    const card = functions.buildCard('New Card');
    group.appendChild(card);

    expect (group.children.length).toBe(1);

    const text = "Brand New Card";
    functions.addAfter(card, text);
    expect (group.children.length).toBe(2);
    expect (group.children[0].textContent).toContain('New Card');
    expect (group.children[1].textContent.substr(0, 14)).toBe(text);
});

test ('Delete Function', () => {

    const group = document.createElement('div');
    const card = functions.buildCard('Card to be Deleted');
    group.appendChild(card);

    expect (group.children.length).toBe(1);
    functions.removeFunction(card);
    expect (group.children.length).toBe(0);
})