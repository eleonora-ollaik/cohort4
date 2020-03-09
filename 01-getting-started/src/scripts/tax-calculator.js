const taxCalc = {

    federalTax: (income) => {
        if (income <= 48535) {
            return income * 0.15;
        } else if (48535 < (income) <= 97069 ) {
            return ((income - 48535) * 0.205) + 7280.25;
        } else if (97069 < (income) <= 150473) {
            return ((income - 97069) * 0.26) + 17229.72;
        } else if (150473 < (income) <= 214368) {
            return ((income - 150473) * 0.29) + 31114.76;
        } else {
            return ((income - 214368) * 0.33) + 49644.31;
        }
    }
}

export default taxCalc;