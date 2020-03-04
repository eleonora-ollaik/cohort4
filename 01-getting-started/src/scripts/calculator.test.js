import calculator from './calculator'


test('Add numbers', () => {
    expect(calculator.add(2,5)).toStrictEqual(7);
});


test('Subtract numbers', () => {
    expect(calculator.substract(7,5)).toStrictEqual(2);
});

test('Multiply numbers', () => {
    expect(calculator.multiply(7,5)).toStrictEqual(35);
});

test('Divide numbers', () => {
    expect(calculator.divide(35,5)).toStrictEqual(7);
});
