import carAge from './syntax'

test('Can we fix the car?', () => {
    expect(carAge(8)).toBe("Will be ready by tomorrow");
});