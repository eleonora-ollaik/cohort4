import arrAndObj from './arraysAndObjects.js'

test('Array add number', () => {
    const arr1 = arrAndObj.addArr([], [3]); 
    expect(arr1.length).toBe(1);
    expect(arrAndObj.addArr(([2]),3)).toStrictEqual([2,3]);

});

test('Total Array', () => {
    expect(arrAndObj.totalArr([2, 3, 5])).toStrictEqual(10);
});

test('Show Arrays', () => {
    expect(arrAndObj.showArray([2, 3, 5])).toStrictEqual("2, 3, 5");
});

test('Dictionary Function', () => {
    const cap = arrAndObj.getCountryCapital('ca');
    expect(cap).toBe("Ottawa");
});

test('Dictionary Lookup', () => {
    expect(arrAndObj.getCountryCapital('mx')).toBeFalsy();
    arrAndObj.addCountryCapital('mx', 'Mexico City');
    expect(arrAndObj.getCountryCapital('mx')).toBe('Mexico City');
})