const taxCalc = {

    federalTax: (income) => {
        if (income <= 48535) {
            let tax = income * 0.15;
            return Number(tax.toFixed(2));

        } else if (48535 < (income) <= 97069 ) {
            let tax = ((income - 48535) * 0.205) + 7280; 
            return Number(tax.toFixed(2));

        } else if (97069 < (income) <= 150473) {
            let tax = ((income - 97069) * 0.26) + 17230;
            return Number(tax.toFixed(2));

        } else if (150473 < (income) <= 214368) {
            let tax = ((income - 150473) * 0.29) + 31115;
            return Number(tax.toFixed(2));

        } else  {
            let tax = ((income - 214368) * 0.33) + 49645;
            return Number(tax.toFixed(2));


    }
         
}
    
}
 
export default taxCalc;