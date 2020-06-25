class Node {
    constructor (subject, amount, next = null, previous = null) {
        this.subject = subject;
        this.amount = Number(amount);
        this.next = next;
        this.previous = previous;
    }

    show(){
        return `${this.subject}: ${this.amount}`
    }
}

class LinkedList {
    constructor() {
        this.headNode =  null;
        this.currentNode = null ;
        this.lastNode =  null;
        this.size =  0;
        }

        insertNode (subject, amount) {
            let newNode = new Node(subject, amount);
            let current;
            // if there is no other nodes

            if(!this.headNode) {
                this.headNode =  newNode;
                this.currentNode = newNode;
                this.lastNode = newNode;
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
                this.headNode.previous = this.currentNode;
            }

            //if putting in the end

            else if (!this.currentNode.next) {
                current = this.currentNode;
                this.lastNode = newNode;
                this.currentNode = newNode;
                this.currentNode.previous = current;
                current.next = this.currentNode;
            }
            else {
                current = this.currentNode;
                let oldNext = current.next;
                this.currentNode = newNode;
                this.currentNode.previous = current;
                current.next = this.currentNode;
                this.currentNode.next = oldNext;
                oldNext.previous = this.currentNode;
            }
            

            this.size++;
            return this.currentNode;

        }

        first() {
            this.currentNode = this.headNode;
            return this.currentNode;
        }

        last() {
            this.currentNode = this.lastNode;
            return this.currentNode 
        }


        get() {
            return this.currentNode;
        }

        next() {
        
            if (this.currentNode.next !== null) {
                this.currentNode = this.currentNode.next;
                return this.currentNode;
            } 
            else {
                return 'There is no next item in the list'
            }
            // return;
        }

        previous() {
            
            if (this.currentNode.previous !==  null) {
                this.currentNode =  this.currentNode.previous;
                return this.currentNode;
            }
            return;
        }

        removeNode() {
        let nodeToRemove = this.currentNode;
        if (!this.headNode) {
            return;
        }  
        else if (this.headNode === this.lastNode) {
            this.clearList();

        }   
        
        else if (nodeToRemove === this.headNode) {
            this.headNode = this.headNode.next;
            this.headNode.previous = null;
            this.currentNode = this.headNode;
         }

         else if (nodeToRemove === this.lastNode) {
             this.lastNode = this.lastNode.previous;
             this.lastNode.next = null;
             this.currentNode = this.lastNode;
         }

         else {
            let tempStart = nodeToRemove.previous;
            let tempEnd = nodeToRemove.next;
             this.currentNode = tempStart;
             this.currentNode.next = tempEnd;
             tempEnd.previous = this.currentNode;

         }
         this.size--;
         
        }

        clearList () {
            this.headNode = null;
            this.size = 0;
        }

        printListData() {
            // let current = this.headNode;

            while(this.currentNode) {
                console.log(this.currentNode.subject);
                this.currentNode = this.currentNode.next;
                
            }
        }



        total() {
            let total = 0;
            let startNode = this.headNode;
            while (startNode) {
                total +=startNode.amount;
                startNode = startNode.next;
            }
            return total;
        }

}

export default {Node, LinkedList};