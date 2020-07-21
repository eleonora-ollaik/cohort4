class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class FifoQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  putIn(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  putOut() {
    let node = this.first;

    if (this.first) {
      this.first = this.first.next;
    } else if (!this.first) {
      this.last = null;
    }
    this.size--;
    return node;
  }

  collection() {
    let result = [];
    let node = this.first;

    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }

}

class LifoStack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  putIn(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
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
      this.first = this.first.next;
    }
    this.size--;
    return value;
  }

  collection() {
    let result = [];
    let node = this.first;

    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }
}
export default { Node, FifoQueue, LifoStack };
