class Node {
constructor (value) {
    this.value = value;
    this.next = null;
}
}

class FifoQueue {
    constructor() {
        this.first  = null;
        this.last = null;
        this.size = 0;
        // let array = []
    }

    putIn (value) {
        let node = new Node(value);
         if (!this.first) {
             this.first = this.last = node;
         }
         else {
             this.last.next = node;
             this.last = node;
         }
        //  this.array.push(node)
        this.size++
    }

    putOut() {
        let node = this.first;

        if (this.first) {
            this.first = this.first.next;

        }
        else if (!this.first) {
            this.last = null
            
        }
        this.size--;
        return node;
    }

    collection() {
        if (!this.first) {
            return 'No nodes'
        }
        else {
            let array = [];
            let node = this.first;
            while (node) {
                array.push(node.value);
                node = node.next;
            }
            // return array.join(',')
            return array
        }
    }
}

class LifoStack  {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    putIn(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = this.last = node;
        }
        else {
        let oldFirst = this.first;
        this.first = node;
        this.first.next = oldFirst;

        }
        this.size++;
    }

    putOut() {
        let value = null;

        if (this.first) {
            value = this.first.value;
            // let oldNext = this.first.next;
            this.first = this.first.next;
        }
        this.size--;
        return value;
    }

}
export default {Node, FifoQueue, LifoStack};