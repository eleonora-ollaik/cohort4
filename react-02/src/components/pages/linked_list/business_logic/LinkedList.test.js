import {Node, LinkedList} from './LinkedList.js'

test('show function from Node class', () => {
const newNode = new Node('Apples', 5)
expect(newNode.show()).toBe('Apples: 5')
})

test('testing LinkedList class', () => {
//testing insert

let linkedList = new LinkedList;
linkedList.insertNode('first thingy', 8);
linkedList.insertNode('second thingy', 12);

expect(linkedList.size).toBe(2);
linkedList.printListData()
expect(linkedList.first().next.show()).toBe('second thingy: 12');
linkedList.last();
expect(linkedList.currentNode.show()).toBe('second thingy: 12');

linkedList.insertNode('third thingy', 26);
linkedList.last();
expect(linkedList.currentNode.show()).toBe('third thingy: 26');

})

test ('does first and last functions work', () => {
    let linkedList = new LinkedList();

    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);
    linkedList.insertNode('node 3', 3);
    linkedList.insertNode('node 4', 4);

    linkedList.first();

    expect(linkedList.currentNode.show()).toBe('node 1: 1');

    linkedList.last();

    expect(linkedList.currentNode.show()).toBe('node 4: 4');


})

test ('does get work', () => {
    const linkedList = new LinkedList();
    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);

    expect(linkedList.get().subject).toBe('node 2')
})

test ('does navigation work', () => {
    const linkedList = new LinkedList();
    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);
    linkedList.insertNode('node 3', 3);

    linkedList.first();
    expect(linkedList.currentNode.show()).toBe('node 1: 1');

    linkedList.last();
    expect(linkedList.currentNode.show()).toBe('node 3: 3');

    linkedList.previous();
    expect(linkedList.currentNode.show()).toBe('node 2: 2');

    linkedList.next();
    expect(linkedList.currentNode.show()).toBe('node 3: 3');

})

test('does the delete function  work', () => {
    let linkedList = new LinkedList();

    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);
    linkedList.insertNode('node 3', 3);
    linkedList.insertNode('node 4', 4);

    linkedList.removeNode();
    expect(linkedList.lastNode.show()).toBe('node 3: 3');

    linkedList.first();
    linkedList.removeNode();
    expect(linkedList.headNode.show()).toBe('node 2: 2');
    // console.log(linkedList)
    linkedList.insertNode('node 5', 5);
    // console.log(linkedList)
    linkedList.insertNode('node 6', 6);
    // console.log(linkedList)

    linkedList.printListData()
    expect(linkedList.lastNode.show()).toBe('node 3: 3');
    expect(linkedList.first().next.show()).toBe('node 5: 5')
    // console.log(linkedList)
    linkedList.removeNode();
    // console.log(linkedList)
    expect(linkedList.currentNode.show()).toBe('node 5: 5')


})

test ('does clear function work', () => {
    const linkedList = new LinkedList();
    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);

    expect(linkedList.clearList()).toBe(undefined)
})



test ('does total work', () => {
    const linkedList = new LinkedList();

    linkedList.insertNode('node 1', 1);
    linkedList.insertNode('node 2', 2);
    linkedList.insertNode('node 3', 3);
    linkedList.insertNode('node 4', 4);

    expect(linkedList.total()).toBe(10)
})