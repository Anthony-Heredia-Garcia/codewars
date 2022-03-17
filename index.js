
function concatArray(what) {

    let newArray = [].concat.apply([], what);
    return newArray
  }
  const bigArray = [[1, 2, 3], [4, 5], [6], ["stuff"]];
  const biggerArray = [[7], [8], [9, 10, 11, 12]];
  
  
  console.log(concatArray(biggerArray));
  
  function removeDupes(dupes) {
  
  const uniqueArray = [...new Set(dupes)];
  return uniqueArray;
  }

  const dupeArray = [1, 1, 2, 3, 3, 4, 5];
  console.log(removeDupes);

  function fun (aParam, bParam, cParam, dParam) {
    console.log(aParam); // 'a'
    console.log(bParam); // 'b'
    console.log(cParam); // 'c'
    console.log(dParam); // 'd'
  }
  const arr = [ 'b', 'c' ];
  fun('a', ...arr,);

  const multArray = [1, 2, 3, 4, 5];
  function multiply(stoof) {
      let product = 1;
      for (var i=0; i<stoof.length; i++){
          product = product * stoof[i];
      }
      return product;
  }

  console.log(multiply(multArray));


  function makeNegative(num) {
    if (Math.sign(num) === -1) {
      return num;
    }
    else {
      return -num;
    }
  }

  function opposite(number) {
    return number * (-1);
     }


   //remove first and last character of string given
   function removeChar(str){
    str = str.substring(1);
    str = str.slice(0, -1); 
    console.log(str)
   
   };

   removeChar("Anthony");


  //  function solution(str){
  //    let splitString = str.split("");
  //    let reverseArray = splitString.reverse();
  //    let joinArray = reverseArray.join("");
  //    return joinArray;
  
  // }

  function solution(str){
    return str.split('').reverse().join('');  
  }

  console.log(solution('Hello'));


  const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers);

console.log(max);


function boolToWord( bool ){
  if (bool === true) {
    return "Yes";
  }  else if (bool === false) {
    return "No";
  }
}

// console.log (boolToWord(false));

// function repeatStr (n, s) {
//   let n;
//   let s;
//   return s.repeat([n])
// }

function noSpace(x){
  x.replace(/\s/g, "");
  return x;
}