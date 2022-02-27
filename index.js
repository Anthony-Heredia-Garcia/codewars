
function concatArray(what) {

    let newArray = [].concat.apply([], what);
    return newArray
  }
  const bigArray = [[1, 2, 3], [4, 5], [6], ["stuff"]];
  const biggerArray = [[7], [8], [9, 10, 11, 12]];
  
  
  console.log(concatArray(biggerArray));
  

  const dupeArray = [1, 1, 2, 3, 3, 4, 5];
  const uniqueArray = [...new Set(dupeArray)];

  console.log(uniqueArray);
  