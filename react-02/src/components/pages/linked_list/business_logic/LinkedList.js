class Node {
    constructor (subject, amount) {
        this.subject = subject;
        this.amount = Number(amount);
        this.forwardNode = null;
    }

    show(){
        return `${this.subject}: ${this.amount}`
    }
}

class LinkedList {
    constructor(currentNode, headNode, size) {
        this.currentNode = currentNode || null;
        this.headNode = headNode || null;
        this.size = size || 0;
        }

        insertNode (subject, amount) {
            let thisNode = this.headNode;
            let newNode = new Node(subject, amount);

            if(!thisNode) {
                this.headNode = newNode;
                this.currentNode = newNode;
                this.size++;
                return this.currentNode;
            }
            else if (thisNode !== this.headNode){
                thisNode = newNode.forwardNode;
            }
// console.log(thisNode);
            let nextNode = thisNode.forwardNode;
            thisNode.forwardNode = newNode;
            newNode.forwardNode = nextNode;

            // console.log(this.headNode);
            this.currentNode = newNode;
            this.size++;

            return this.currentNode;

        }

        first() {
            this.currentNode = this.headNode;
            return this.currentNode;
        }

        last() {
            let thisNode = this.currentNode;
            while(thisNode.forwardNode) {
                thisNode = thisNode.forwardNode;
            }
            this.currentNode = thisNode;
            return this.currentNode
        
        }
}

export {Node, LinkedList};