const arrAndObj = {

    addArr: (arr, num) => {
    arr.push(Number(num));
        return arr;
        // console.log(arr1);
    },

    totalArr: (arr) => {
       let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
           
        }
        return total;
    },

    showArray: (array) => {
        let displayArray = array.join(', ');
        return displayArray;
    },

    caps: {
        'ca' : "Ottawa",
        'kg' : "Bishkek",
        'us' : "Washington",
    },

    getCountryCapital (code) {
        return arrAndObj.caps[code];
    },

    addCountryCapital(code, value) {
        arrAndObj.caps[code] = value;
    }
}

export default arrAndObj;