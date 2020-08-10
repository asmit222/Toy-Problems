const problem2 = require("../toyproblems/findTheNextNumber.js")

// ======= Find The Next Number ===================================================

const findTheNextNumberTest = function(arr) {
  var addTest = arr[2] - arr[1];
  var multiplyTest = arr[2] / arr[1];
  if (arr[1] - addTest === arr[0]) {
    return arr[2] + addTest;
  } else {
    return arr[2] * multiplyTest;
  }
  };
  const testRunnerFindTheNextNumber = function () {
   var testArr = [];
for (var i = 0; i < 50; i++) {
   var number1 = getRandomInt(76) + 1;
   var number2 = getRandomInt(22) + 1;
   var number3 = getRandomInt(2);
   var number4 = getRandomInt(2);
if (number3 === 1) {
  number1 = number1 * -1;
}
if (number4 === 1) {
  number2 = number2 * -1;
}
var tempArr = [number1, null, null];
if (number3 === 0) {
  tempArr[1] = number1 + number2;
  tempArr[2] = tempArr[1] + number2;
} else {
  tempArr[1] = number1 * number2;
  tempArr[2] = tempArr[1] * number2;
}
testArr.push(tempArr);
}
var totalPassed = 0;
var failedTests = [];
for (var i = 0; i < testArr.length; i++) {
if (findTheNextNumberTest(testArr[i]) === problem2.findTheNextNumber(testArr[i])) {
  totalPassed++;
} else {
  failedTests.push(`failed Find The Next Number test number ${i+1}: `);
  failedTests.push(`input: ${testArr[i]} `);
  failedTests.push(`correct answer: ${findTheNextNumberTest(testArr[i])} `);
  failedTests.push(`your answer: ${problem2.findTheNextNumber(testArr[i])} `);
  failedTests.push(`     `);
}
}
for (var i = 0; i < failedTests.length; i++) {
  console.log(failedTests[i]);
}
console.log(`Find The Next Number: passed ${totalPassed} / 50 tests!`)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  module.exports.testRunnerFindTheNextNumber = testRunnerFindTheNextNumber;
  module.exports.findTheNextNumberTest = findTheNextNumberTest;
  // ===============================================================================