const arrAndObj = {

    addArr: (arr, num) => {
        arr.push(Number(num));
        return arr;
    },

    totalArr: (arr) => {
       let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
           
        }
        return total;
    }

}

export default arrAndObj;