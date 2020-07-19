taxInfo = [
    {'lowest': 0, 'highest': 48535, 'rate': 0.15},
    {'lowest': 48535, 'highest': 97069, 'rate': 0.205},
    {'lowest': 97069, 'highest': 150473, 'rate': 0.26},
    {'lowest': 150473, 'highest': 214368, 'rate': 0.29},
    {'lowest': 214368, 'highest': 1000000000, 'rate': 0.33}
]



def CanTax(income):
    remainder = 0
    tax = 0.0
    index = 0

    for i in taxInfo:

        if i['lowest'] < income <= i['highest']:
            index = taxInfo.index(i)
            remainder = income - i['lowest']
    tax = round(taxInfo[index]['rate'] * remainder, 2)
    for i in range(0, index, 1):
        tax += round(taxInfo[i]['rate'] * (taxInfo[i]['highest'] - taxInfo[i]['lowest']), 2)

    return round(tax, 2)

        
taxCalc1 = CanTax(100000)

 



print(f"Cantax {taxCalc1}")
