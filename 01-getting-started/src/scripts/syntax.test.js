import {yearOfBirth, carAge, string1, string2, overSixteen, arrModification, undefinedVal, getUserName, findTheSpeed, arrayFunctions} from './syntax'


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
    expect(arrayFunctions.unshiftFunction(0, 4)).toStrictEqual([0,4,1,2,3])});