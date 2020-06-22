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
    }

    putOut() {
        let node = this.first;

        if (this.first) {
            this.first = this.first.next;

        }
        else if (!this.first) {
            this.last = null
        }
        return node;
    }
}

class LifoStack  {
    constructor() {
        this.first = null;
        this.last = null;
    }

    putIn(value) {
        let node = new Node(value);
        this.first = node
    }
}
export default {Node, FifoQueue};