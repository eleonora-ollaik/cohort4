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