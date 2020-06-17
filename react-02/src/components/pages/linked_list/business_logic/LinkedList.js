class Node {
    constructor (subject, amount, next = null) {
        this.subject = subject;
        this.amount = Number(amount);
        this.next = next;
    }

    show(){
        return `${this.subject}: ${this.amount}`
    }
}

class LinkedList {
    constructor() {
        this.currentNode = null ;
        this.headNode =  null;
        // this.lastNode =  null;
        this.size =  0;
        }

        insertFirst(subject, amount) {
            this.headNode = new Node (subject, amount, this.headNode)
            this.size++
        }

        insertLast(subject, amount) {
            let node = new Node(subject, amount);
            let current;

            //If empty, make it a head

            if(!this.headNode) {
                this.headNode = node;
            } else {
                current = this.headNode;

                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
                this.size++

        }

        insertAtIndex(subject, amount, index) {
            //if index is out of range
            if(index > 0 && index > this.size++) {
                return 'No such index';
            }

            //if first index
            if (index === 0) {
            this.insertFirst(subject, amount);
            return;
            }

            const node = new Node(subject, amount);
            let current, previous;

            //set current to first
            current = this.headNode;
            let count = 0;


            while(count < index) {
                previous = current; // node before index
                count++;
                current = current.next; // node after index
            }

            node.next = current;

            previous.next = node;

            this.size++

        }

        //Get at index
        getAt(index) {
            let current = this.headNode;
            let count = 0;

            while(current) {
                if(count == index) {
                    console.log(current.subject);
                }
                count++;
                current = current.next;
            }
            return null;
        }

        //Remove at index
        removeAt(index) {
            if (index >0 && index > this.size) {
                return;
            }
            let current = this.headNode;
            let previous;
            let count = 0;

            //Remove first
            if(index === 0) {
                this.headNode = current.next;

            }else {
                while ( count < index) {
                    count++;
                    previous = current;
                    current = current.next;

                }
                previous.next = current.next;
            }

            this.size--;
            // return;

        }


        clearList () {
            this.headNode = null;
            this.size = 0;
        }

        printListData() {
            let current = this.headNode;

            while(current) {
                console.log(current.subject);
                current = current.next;
                
            }
        }




        insertNode (subject, amount) {
            let newNode = new Node(subject, amount);
            let current;
            let previous;
            // if there is no other nodes

            if(!this.headNode) {
                this.headNode =  newNode;
                this.currentNode = newNode;
                // this.size++;
                // return this.currentNode;
            }

            //if putting in the beginning
            else if (!this.currentNode){
                let newNext = this.headNode;
                this.currentNode = newNode;
                this.currentNode.next = newNext;
                newNode.next = this.headNode;
                newNode.previous = this.currentNode;
                // newNode.previous = this.currentNode;
                this.headNode.previous = this.currentNode;
                // this.size++;
                // return this.currentNode;
            }

            //if putting in the end

            else if (!this.currentNode.next) {
                newNode = this.currentNode;

                while(this.currentNode.next) {
                    this.currentNode = this.currentNode.next;
                }
                this.currentNode.next = newNode
                // this.lastNode = newNode;
                // newNode = this.lastNode.next;
                // this.currentNode.previous = this.lastNode;
                // this.nex = this.currentNode;
            }

            

            this.size++;
            return this.currentNode

        }

        first() {
            this.currentNode = this.headNode;
            return this.currentNode;
        }

        last() {
            this.currentNode = this.lastNode;
            return this.currentNode 
        }
}

export {Node, LinkedList};