import taxCalc from './tax-calculator'

test('Federal tax', () => {
    expect(taxCalc.federalTax(48535)).toStrictEqual(7280.25);
    expect(taxCalc.federalTax(1)).toStrictEqual(0.15);
    expect(taxCalc.federalTax(2)).toStrictEqual(0.30);
    expect(taxCalc.federalTax(50000)).toStrictEqual(7630.35);
    expect(taxCalc.federalTax(100000)).toStrictEqual(17830.575);
    expect(taxCalc.federalTax(150000)).toStrictEqual(31211.10);
    expect(taxCalc.federalTax(250000)).toStrictEqual(61796.26);
});