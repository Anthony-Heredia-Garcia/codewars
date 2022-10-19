// const button = document.querySelector('button');
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

//Convert DNA to RNA -> Replace T with U

const dna = 'GCATAGAT';

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA(dna));

// Return sum of numbers between 2 given integers

function getSum(a, b) {
  const superhelper = [a, b];
  [num1, num2] = superhelper.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
  num1;
  num2;
  let helper = [];
  for (num1; num1 <= num2; num1++) {
    helper.push(num1);
  }
  return helper.reduce((pre, cur) => {
    return pre + cur;
  });
}

console.log(getSum(-1, -10));

function getSum2(a, b) {
  let sum = 0;
  if (a < b) {
    for (a; a <= b; a++) {
      sum += a;
    }
  } else if (a > b) {
    for (a; a >= b; a--) {
      sum += a;
    }
  } else {
    return a;
  }
  return sum;
}

console.log(getSum2(0, -5));

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  min;
  max;
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(GetSum(0, -5));
testNumber = 0 - -5 + 1;
testNumber;

// Correct text recognition mistakes
// 5 -> S, 0 -> O, 1 -> I

const correctThis = '51NGAP0RE';

// function correct(string) {
//   const helper = Array.from(string);
//   for (let i = 0; i < helper.length; i++) {
//     if (helper[i] == 0){
//       helper[i] = 'O'
//     } else if (helper[i] == 5) {
//       helper[i] = 'S'
//     } else if (helper[i] == 1) {
//       helper[i] = 'I'
//     }
//   }
//   return helper.toString().replace(/,/g , '');
// }

function correct(string) {
  return string.replace(/5/g, 'S' ).replace(/0/g, 'O').replace(/1/g, 'I')
}

console.log(correct(correctThis));

//check if value X is included in array A
const myString = 'Eliminate all the overhead setup Use the SOME method to see if one or more of the array entries matches our target Written in the form of a lambda arrow function to make it streamlined'
const checkThis = myString.split(' ')
const alsoThis = 'some'

const checkThat = [107, 54, 39, 2];
const alsoThat = 2

// function check(a, x) {
//   if (a.includes(x)){
//     return true;
//   } else {
//     return false;
//   }
// }

function check(a,x) {
  // const helper = a.toLowerCase();
  // return a.filter(item => item.includes(x))
  return a.some(e => e.toLowerCase() == x.toLowerCase())
}

console.log(check(checkThis, alsoThis))

// How long until initial prinicipal equals desired sum

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
    for (let i = 1; principal < desired; i++) {
      principal += ((principal * interest) - (principal * interest * tax));
      years = i;
    }
    return years;
}

calculateYears(1000, 0.05, 0.18, 1100)

// year 1 - (50 - 9) = 1041
// year 2 - (52.05 - 9.37) = 1083.68
// year 3 - (54.18 - 9.75) = 1128.11 off by .19
