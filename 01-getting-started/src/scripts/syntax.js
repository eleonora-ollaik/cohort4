// 1. define attributes / variables
// We can declare variables or attributes with the help of the following keywords: var, let, const
// number
let yearOfBirth = (year) => {
  return Number(year);
};

// string
let string1 = (str) => {
  return "This is a string!";
};

let string2 = (str) => {
  return `Yep, anything you type in quotes is a string, look what you typed: ${str}`;
};
// boolean
// true, false
let overSixteen = (answ) => {
  if (answ === "yes") {
    return true;
  } else {
    return false;
  }
};
// array

let arrModification = (num) => {
  let arr = [1, 5, 8];
  arr[0] = num;
  return arr;
};

// dictionary / objects
let getUserName = (name, age) => {
  let user = {
    name: name,
    age: age,
  };
  return user.name;
};

// undefined
function undefinedVal() {
  var couch;
  return couch;
} //a variable without value has the value undefined

// 2. sample if / else

let carAge = (age) => {
  if (age > 15) {
    return "Sorry, we can't fix your car";
  } else if (age === 15) {
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
};
// returns
// The return statement stops the execution of a function and returns a value from that function.
// 4. arrays - are used to store multiple values in a single variable

// add to the front
let arrayFunctions = {
  unshiftFunction: (num1, num2) => {
    let array = [1, 2, 3];
    return array.unshift(num1, num2);
  },

  // add to the end
  pushFunction: (num3) => {
    let array = [1, 2, 3];
    return array.push(num3);
  },

  // update values
  updateValues: (num4) => {
    let array = [1, 2, 3];
    array[0] = num4;
    return array;
  },
};
// 5. loops - when you want to run the same code over and over again, each time with a different value
// for - loops through a block of code a number of times
let forLoop = (index) => {
  let array1 = [];
  for (let i = index; i > 0; i -= 2) {
    array1.push(i);
  }
  return array1;
}; //[10,8,6,4,2]

// for/in - loops through the properties of an object
let forInLoop = () => {
  let item;
  let arr = [];
  const letters = {
    a: 3,
    b: 5,
    c: 6,
    d: 1,
  };
  for (item in letters) {
    arr.push(item);
  }
  return arr;
};

// while - loops through a bllock of code while a specified condition is true
let whileLoop = () => {
  let arrRandom = [];
  let i = 5;
  while (i >= 0) {
    arrRandom.push(i);
    i--;
  }
  return arrRandom;
};

// do while - also loops through a block of code while a specified condition is true
let doWhile = () => {
  let myArray = [];
  let i = 0;
  do {
    myArray.push(i);
    i++;
  } while (i < 5);
  return myArray;
};

// forEach (with array and function)
let forEach = () => {
  const newArray = [1, 2, 10, 16];
  const double = [];
  const newNewArr = newArray.forEach((num) => {
    double.push(num * 2);
  });
  return double;
};

// 6. Objects / Dictionaries
// similar to arrays, except that instead of using indexes, they use properties to access the data

// declare object
let myObj = () => {
  let obj = [
    {
      type: "cat",
      name: "Dymok",
      eats: "Fish and cat food",
    },
    { type: "dog", name: "Graf", eats: "anything that falls on the floor" },
  ];

  // lookup key to retrieve value

  return obj[0].eats;
};

export {
  myObj,
  forEach,
  doWhile,
  whileLoop,
  forInLoop,
  yearOfBirth,
  carAge,
  string1,
  string2,
  overSixteen,
  arrModification,
  undefinedVal,
  getUserName,
  findTheSpeed,
  arrayFunctions,
  forLoop,
};
