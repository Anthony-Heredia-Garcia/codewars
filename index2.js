const button = document.querySelector('button');
const numbers = [1, 2, 3, 4, 5, 6, 7];

const resultsHandler = (cb) => {
  results = numbers.reduce((a, b) => a + b, 0);
  cb(results);
};

const showResults = (message, results) => {
  console.log(results);
  console.log(message);
};

const outerFunction = () => {
  const innerFunction = () => {
    console.log('Inner Function!');
  };
  outerFunction.innerFunction = innerFunction;
  console.log('Outer Function!');
};

outerFunction();
outerFunction.innerFunction();
resultsHandler(showResults.bind(this, 'Here is the message'));

//Sum array of numbers, can be negative or floats
const myNumbers = [1, 2, 3, -9, 4.5];
//Come back to this later
// function sum(arr) {
//   arr.reduce((prev, curr) => {
//     prev + curr;
//   })
// }

function sum(arr) {
  let result = 0;
  for (item of arr) {
    result += item;
  }
  return result;
}

console.log(sum(myNumbers));

//Count Sheep are present
const sheepPen = [true, true, true, false, true, false];

// function countSheeps(arrayOfSheep) {
//   let i = 0;
//   arrayOfSheep.forEach(element => {
//     if (element === true) {
//       i++
//     }
//   });
//   return i;
// }

const countSheeps2 = (arrayOfSheep) => {
  let i = 0;
  arrayOfSheep.forEach((element) => {
    if (element === true) {
      i++;
    }
  });
  return i;
};

//alternative and more beautiful way to write it
//Method Chaining

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps2(sheepPen));
console.log(countSheeps(sheepPen));

//create an array from big number, and reverse it

const coolNumbers = 1234;

function digitize(n) {
  return Array.from(String(n), (num) => Number(num)).reverse();
}

console.log(digitize(coolNumbers));

//Square every digit of a number and concatenate

const ourNumbers = 123; //answer should be 149

function squareDigits(num) {
  const squaredArray = [];
  const arrayOfStrings = Array.from(String(num), (num) => Number(num));
  for (const string of arrayOfStrings) {
    squaredArray.push(string ** 2);
  }
  return parseInt(squaredArray.join(''));
}
console.log(squareDigits(ourNumbers));

// array of count of positives and sum of negatives

const pan = [1, 2, 3, 4, -2, -3];
const pan2 = [];

function countPositivesSumNegatives(input) {
  if (input.length == 0) {
    return [];
  }
  let count = [];
  let sum = 0;
  let newArray = [];
  for (num of input) {
    if (!input) {
      return;
    } else if (num > 0) {
      count.push(num);
    } else if (num < 0) {
      sum += num;
    }
  }
  return (newArray = [count.length, sum]);
}

console.log(countPositivesSumNegatives(pan));
console.log(countPositivesSumNegatives(pan2));

// return a new array with each value doubled

const doubleThis = [1, 2, 3];

// function maps(x){
//   let doubledArray = [];
//   for (num of x) {
//     doubledArray.push(num * 2);
//   };
//   return doubledArray;
// }

function maps(x) {
  return x.map((num) => num * 2);
}

console.log(maps(doubleThis));

//Given an integer, return a string with a murmur

var countSheep = function (num) {
  let sleeper = [];
  for (let i = 0; i < num; i++) {
    sleeper.push(`${i + 1}` + ' Sheep...');
  }
  return sleeper.join('');
};

/* Hey Anthony, here is a more conscise and shorter way of doing the above exercise! */

var countSheep2 = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

//The above function just adds onto the 'str' string with the += and then returns the long string

console.log(countSheep(3));
