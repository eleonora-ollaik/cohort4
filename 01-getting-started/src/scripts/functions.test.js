import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Is even or not?', () => {
    expect(functions.isEven(5)).toBe(false);
});


// test ('Equal to', () => {
//     expect(functions.equal(5)).toBe(5);
//     expect(functions.equal(3)).toBe(3);
// });

// test ('Clean', () => {
//     expect(functions.clean(5)).toBe("");
//     expect(functions.clean(3)).toBe("");
// });
