taxInfo = [
    {'lowest': 0, 'highest': 48535, 'rate': 0.15},
    {'lowest': 48535, 'highest': 97069, 'rate': 0.205},
    {'lowest': 97069, 'highest': 150473, 'rate': 0.26},
    {'lowest': 150473, 'highest': 214368, 'rate': 0.29},
    {'lowest': 214368, 'highest': 1000000000, 'rate': 0.33}
]

class CanTax:
    def taxRateCalc(self, income):
        index = 0
        tax = 0.0
        remainder = 0

        for i in taxInfo:
            if i['lowest'] < income and i['highest'] >= income:
                index = taxInfo.index(i)
                print(index)
                remainder = income = i['lowest']

        tax = round(taxInfo[index]['rate']* remainder, 2)
        for i in range(0, index, 1):
                tax += round((taxInfo[i]['rate'] * (taxInfo[i]['highest'] -taxInfo[i]['lowest'] )), 2)
                print(tax)
        return tax

income = 45000

income = CanTax()
print(income)
