
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