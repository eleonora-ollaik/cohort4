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
        if (!this.first) {
            this.first = node;
        }
        else {
        this.first = this.first.next;
        this.first = node;
        }
    }

    putOut() {
        let value = null;

        if (this.first) {
            value = this.first.value;
            let oldNext = this.first.next;
            this.first = this.first.next;
        }
        return value;
    }

}
export default {Node, FifoQueue, LifoStack};