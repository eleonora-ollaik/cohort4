import functions from './cards.js';

let counter = 4;


document.body.addEventListener('click', e => {



    // console.log('You clicked');
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    if (e.target.nodeName === 'BUTTON') {
        // console.log(e.target.textContent);
        if (e.target.textContent === 'Add Before') {
            functions.addBefore(e.target.parentElement, "Card " + counter++);
        }


        else if (e.target.textContent === 'Add After') {
            functions.addAfter(e.target.parentElement, 'Card ' + counter++);
        }

        else if (e.target.textContent === 'Remove') {
            functions.removeFunction(e.target.parentElement);
        }
    }
})
