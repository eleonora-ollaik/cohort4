import arrAndObj from './arraysAndObjects.js'

test('Array add number', () => {
  
    expect(arrAndObj.addArr(([2,3]), 5)).toStrictEqual([2,3,5]);

});

test('Total Array', () => {
    expect(arrAndObj.totalArr([2, 3, 5])).toStrictEqual(10);
});