
// 1. define attributes / variables
        // We can declare variables or attributes with the help of the following keywords: var, let, const
    // number
    let yearOfBirth = (year) =>{
        return Number(year);
    };

    // string
        let string1 = (str) => {
            return 'This is a string!'
        };
    
        let string2 = (str) => {
            return `Yep, anything you type in quotes is a string, look what you typed: ${str}`;
        };
    // boolean
        // true, false
        let overSixteen = (answ) => {
            if (answ === "yes") {
                return true
            } else {
                return false
            }
        };
    // array
        

        let arrModification = (num) => {
            let arr = [1,5,8];  
            arr[0] = num;
            return arr;
        };

    // dictionary / objects
        let getUserName = (name, age) => {
            let user = {
            name: name,
            age: age
            };
             return user.name};

    // undefined 
       function undefinedVal() {
            var couch;
            return couch;
        }; //a variable without value has the value undefined

// 2. sample if / else
   

    let carAge = (age) => {
        if ((age) > 15) {
       return "Sorry, we can't fix your car";
    } else if ((age) === 15) {
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
        
//     // add to the front
        let arrayFunctions = {
        unshiftFunction : (num1, num2) => {
            let array = [1,2,3];
            return array.unshift(num1,num2);
            
        }

    };
//     // add to the end
//         pushFunction : (num2) => {
//             return array.push(num2);
//         },
//     // update values
//         updateValues : (num3) => {
//             array[0] = num3;
//             return array;
//         }
//     };
// // 5. loops - when you want to run the same code over and over again, each time with a different value
//     // for - loops through a block of code a number of times
//         let array1 = [];
//         for (let i=10; i>0; i-=2) {
//             array1.push(i);
//         }; //[10,8,6,4,2]
//     // for/in - loops through the properties of an object
//         const letters = {
//             a:3,
//             b:5,
//             c:6,
//             d:1
//         };
//             for (item in letters) {
//                 console.log(item)
//             };
        
//     // while - loops through a bllock of code while a specified condition is true
//         var arrRandom = [];
//         var i=5;
//         while (i>=0) {
//             arrRandom.push(i);
//             i--;
//         }
//     // do while - also loops through a block of code while a specified condition is true
//         var myArray = [];
//         var i = 0;
//         do {
//             myArray.push(i);
//             i++;
//         } while (i<5);
//     // forEach (with array and function)
//         const newArray = [1,2,10,16];
//         const double = [];
//         const newNewArr = newArray.forEach((num)=> {
//             double.push(num*2);
//         });
//         console.log(double);
        
// // 6. Objects / Dictionaries
//         // similar to arrays, except that instead of using indexes, they use properties to access the data
//     // declare object
//     var myObj = {

//     }

//     // lookup key to retrieve value
export {yearOfBirth, carAge, string1, string2, overSixteen, arrModification, undefinedVal, getUserName, findTheSpeed, arrayFunctions};
