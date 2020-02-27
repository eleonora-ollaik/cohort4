import {myObj, forEach, doWhile, whileLoop, forInLoop, yearOfBirth, carAge, string1, string2, overSixteen, arrModification, undefinedVal, getUserName, findTheSpeed, arrayFunctions, forLoop} from './syntax'


test('What is your year of Birth', () => {
    expect(yearOfBirth(1995)).toBe(1995);
});

test('Can we fix the car?', () => {
    expect(carAge(8)).toBe("Will be ready by tomorrow");
});

test('Is a string1?', () => {
    expect(string1("Hi")).toBe('This is a string!');
});

test('Is a string2?', () => {
    expect(string2("Hi")).toBe("Yep, anything you type in quotes is a string, look what you typed: Hi");
});

test('Are you over 16?', () => {
    expect(overSixteen("yes")).toBe(true)});

test('Array Modification', () => {
        expect(arrModification(15)).toStrictEqual([15, 5, 8])});

test('Get Username from the object', () => {
            expect(getUserName("Brad" , 15)).toBe("Brad")}); 

test('Undefined Value', () => {
     expect(undefinedVal(15)).toBe(undefined)});

test('Find the Speed', () => {
    expect(findTheSpeed(15, 5)).toBe(3)});

test('Array Add to the Front', () => {
    expect(arrayFunctions.unshiftFunction(0, 4)).toStrictEqual(5)});
    
test('Array Add to the End', () => {
    expect(arrayFunctions.pushFunction(15)).toStrictEqual(4)});

test('Update values in array', () => {
    expect(arrayFunctions.updateValues(15)).toStrictEqual([15,2,3])});

test('For Loops', () => {
    expect(forLoop(10)).toEqual([10,8,6,4,2])});

test('For In Loops', () => {
    const letters = {
        a:3,
        b:5,
        c:6,
        d:1
    };
    expect(forInLoop()).toEqual(["a", "b", "c", "d"])});

test('While Loop', () => {
    expect(whileLoop()).toStrictEqual([5,4,3,2,1,0])});

test('Do While', () => {
    expect(doWhile()).toStrictEqual([0,1,2,3,4])});

test('For Each', () => {
    expect(forEach()).toStrictEqual([2,4,20,32])});

test('Look Up what the animal eats?', () => {
    expect(myObj()).toEqual('Fish and cat food');
    });
