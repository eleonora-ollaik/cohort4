import tempChange from './javascript'

test ('Farenheit to Celcius', () => {
    expect(tempChange.farenheitToC(212)).toBe(100);
    expect(tempChange.farenheitToC(32)).toBe(0);
});