import taxCalc from './tax-calculator.js'

test('Federal tax', () => {
  

    expect(taxCalc.federalTax(48535)).toStrictEqual(7280.25);
    expect(taxCalc.federalTax(1)).toStrictEqual(0.15);
    expect(taxCalc.federalTax(2)).toStrictEqual(0.30);
    expect(taxCalc.federalTax(50000)).toStrictEqual(7580.32);
    expect(taxCalc.federalTax(100000)).toEqual(17830.32);
    expect(taxCalc.federalTax(150000)).toStrictEqual(28080.32);
    expect(taxCalc.federalTax(200000)).toStrictEqual(38330.32);
    expect(taxCalc.federalTax(250000)).toStrictEqual(48580.32);
    expect(taxCalc.federalTax(280000)).toStrictEqual(54730.32);
   
});