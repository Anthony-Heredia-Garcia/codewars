const button = document.querySelector('button');
const numbers = [1, 2, 3, 4, 5, 6, 7];

const resultsHandler = (cb) => {
  results = numbers.reduce((a, b) => a + b, 0)
  cb(results)
}

const showResults = (message, results) => {
  console.log(results);
  console.log(message);
}

resultsHandler(showResults.bind(this, 'Here is the message'));
