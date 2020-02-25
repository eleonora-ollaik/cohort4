// 1. define attributes / variables
        // We can declare variables or attributes with the halp of the following keywords: var, let, const
    // number
        let number = 5; 
    // string
        let string1 ="5";
        let string2 ='hello';
    // boolean
        true, false
    // array
        var arr = [1,5,8];
    // dictionary / objects
        let user = {
            name: 'Brad',
            age: 56
            }
    // undefined 
        var couch; //a variable without value has the value undefined

// 2. sample if / else
   let age = prompt("How old is your car?");

    let carAge = (age) => {
        if (Number(age) > 15) {
       return "Sorry, we can't fix your car";
    } else if (Number(age) = 15) {
           return "Well, I guess we could try";
    } else {
           return "Will be ready by tomorrow";
       }
    };
// 3. functions
    // parameters - are the names listed in the function definition,
    // arguments - real values passed to the function;
    let findTheSpeed = (distance, time) => {
      let speed = distance / time;
      return speed;
    }
    // returns
        // The return statement stops the execution of a function and returns a value from that function.
// 4. arrays - are used to store multiple values in a single variable
        let array = [1,2,3];
    // add to the front
        let arrayFunctions = {
        unshiftFunction : (num1) => {
            return array.unshift(num1);
        },
    // add to the end
        pushFunction : (num2) => {
            return array.push(num2);
        },
    // update values
        updateValues : (num3) => {
            array[0] = num3;
            return array;
        }
// 5. loops - when you want to run the same code over and over again, each time with a different value
    // for - loops through a block of code a number of times
        let array1 = [];
        for (let i=10; i>0; i-=2) {
            array1.push(i);
        }; //[10,8,6,4,2]
    // for/in - loops through the properties of an object
        const letters = {
            a:3,
            b:5,
            c:6,
            d:1
        };
            for (item in letters) {
                console.log(item)
            };
        
    // while - loops through a bllock of code while a specified condition is true
        var arrRandom = [];
        var i=5;
        while (i>=0) {
            arrRandom.push(i);
            i--;
        }
    // do while - also loops through a block of code while a specified condition is true
        var myArray = [];
        var i = 0;
        do {
            myArray.push(i);
            i++;
        } while (i<5);
    // forEach (with array and function)
        const newArray = [1,2,10,16];
        const double = [];
        const newNewArr = newArray.forEach((num)=> {
            double.push(num*2);
        });
        console.log(double);
        
// 6. Objects / Dictionaries
        // similar to arrays, except that instead of using indexes, they use properties to access the data
    // declare object
    var myObj = {

    }

    // lookup key to retrieve value

export default carAge;