function concatArray(what) {
  let newArray = [].concat.apply([], what);
  return newArray;
}
const bigArray = [[1, 2, 3], [4, 5], [6], ['stuff']];
const biggerArray = [[7], [8], [9, 10, 11, 12]];

console.log(concatArray(biggerArray));

function removeDupes(dupes) {
  const uniqueArray = [...new Set(dupes)];
  return uniqueArray;
}

const dupeArray = [1, 1, 2, 3, 3, 4, 5];
console.log(removeDupes);

function fun(aParam, bParam, cParam, dParam) {
  console.log(aParam); // 'a'
  console.log(bParam); // 'b'
  console.log(cParam); // 'c'
  console.log(dParam); // 'd'
}
const arr = ['b', 'c'];
fun('a', ...arr);

const multArray = [1, 2, 3, 4, 5];
function multiply(stoof) {
  let product = 1;
  for (var i = 0; i < stoof.length; i++) {
    product = product * stoof[i];
  }
  return product;
}

console.log(multiply(multArray));

function makeNegative(num) {
  if (Math.sign(num) === -1) {
    return num;
  } else {
    return -num;
  }
}

function opposite(number) {
  return number * -1;
}

//remove first and last character of string given
function removeChar(str) {
  str = str.substring(1);
  str = str.slice(0, -1);
  console.log(str);
}

removeChar('Anthony');

//  function solution(str){
//    let splitString = str.split("");
//    let reverseArray = splitString.reverse();
//    let joinArray = reverseArray.join("");
//    return joinArray;

// }

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('Hello'));

const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers);

console.log(max);

function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else if (bool === false) {
    return 'No';
  }
}

// console.log (boolToWord(false));

// function repeatStr (n, s) {
//   let n;
//   let s;
//   return s.repeat([n])
// }

function noSpace(x) {
  x.replace(/\s/g, '');
  return x;
}

//return true if str ends with ending
function solution(str, ending) {
  return str.endsWith(ending) ? true : false;
}

myArray = [1, 2, 2];

function squareSum(numbers) {
  for (i = 0; i < numbers.length; i++) {
    console.log(numbers.value);
  }
}

squareSum(myArray);

//Find the Needle in the Haystack
let pile = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

function findNeedle(haystack) {
  for (item of haystack) {
    if (item == 'needle') {
      return 'found the needle at position ' + haystack.indexOf(item);
    }
  }
}

console.log(findNeedle(pile));

//Rental Car Problem
//$40 per day, $50 off from total if more than 7 days, $20 off if more than 3.
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}

console.log(rentalCarCost(5));

//Testing the .find() and .findIndex() methods

const cats = [
  { name: 'Squeak' },
  { name: 'Mew' },
  { name: 'Pumpkin' },
  { name: 'Loaf' },
];
const moreCats = ['Tom', 'Garfield', 'Sylvester', 'Felix'];

const pumpkin = cats.find((user, idx, users) => {
  return user.name === 'Pumpkin';
});

const loaf = cats.findIndex((user, idx, users) => {
  return user.name === 'Loaf';
});

console.log(pumpkin);
console.log(loaf);
console.log(moreCats.includes('Felix'));

//For Each Loops using Prices

const prices = [0.99, 12.95, 8.59];
const randomNumbers = [32, 71, 0, -4, 19, 1352];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices){
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObject = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObject);
});

console.log(taxAdjustedPrices);

// const sortedPrices = randomNumbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

const sortedNumbers = randomNumbers.sort((a, b) => {
  return a - b;
});

// const sortedNumbers = randomNumbers.sort();

console.log(sortedNumbers);

// console.log(sortedPrices);
// console.log(prices[0]<prices[1]);
