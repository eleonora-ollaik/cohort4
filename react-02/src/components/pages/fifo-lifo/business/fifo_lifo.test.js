import functions from './fifo_lifo.js';

test ('Fifo Queue', () => {
    let fifo = new functions.FifoQueue();

    fifo.putIn('apples');
    expect(fifo.first.value).toBe('apples');
    expect(fifo.last.value).toBe('apples');

    fifo.putIn('pears');
    expect(fifo.first.value).toBe('apples');
    expect(fifo.first.next.value).toBe('pears');
    expect(fifo.last.value).toBe('pears');

    fifo.putOut();
    expect(fifo.first.value).toBe('pears');
    expect(fifo.last.value).toBe('pears');

} )


test ('Lifo Stack', () => {
    let lifo = new functions.LifoStack();

    lifo.putIn('apples');
    expect(lifo.first.value).toBe('apples');
    // expect(lifo.last.value).toBe('apples');

    lifo.putIn('pears');
    console.log(lifo)
    expect(lifo.first.value).toBe('pears');
    expect(lifo.first.next.value).toBe('apples');
    // expect(lifo.last.value).toBe('pears');

    // lifo.putOut();
    expect(lifo.first.value).toBe('pears');
    // expect(lifo.lt.value).toBe('pears');

} )