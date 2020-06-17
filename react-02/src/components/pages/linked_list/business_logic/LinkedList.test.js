import {Node, LinkedList} from './LinkedList.js'

test('show function from Node class', () => {
const newNode = new Node('Apples', 5)
expect(newNode.show()).toBe('Apples: 5')
})

test('testing LinkedList class', () => {
//testing insert

let linkedList = new LinkedList;
linkedList.insertNode('first thingy', 8);
linkedList.insertLast('second thingy', 12);

expect(linkedList.size).toBe(2);
console.log(linkedList.first())
console.log(linkedList)

expect(linkedList.first().next.show()).toBe('second thingy: 12');
linkedList.last();
expect(linkedList.currentNode.show()).toBe('second thingy: 12');

linkedList.insertNode('third thingy', 26);
linkedList.last();
console.log(linkedList)
expect(linkedList.currentNode.show()).toBe('third thingy: 26');

})