const problem3 = require("../toyproblems/makeArraysEqualish.js")

// ======= Make Arrays Equal(ish) =================================================

const makeArraysEqualishTest = function (arr1, arr2) {
  var numbers = [];
  for (var i = 0; i < arr1.length; i++) {
    numbers.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    numbers.push(arr2[i]);
  }
  numbers.sort(function (a, b) {
    return a - b;
  })
  var newArr1 = [];
  var newArr2 = [];
  if (arr1.length > arr2.length) {
   while (newArr2.length < arr2.length) {
  newArr1.push(numbers.pop());
  newArr2.push(numbers.pop());
   }
   while(numbers.length > 0) {
  for (var i = 0; i < numbers.length; i++) {
    newArr1.push(numbers.pop());
  }
   }
  } else {
    while (newArr1.length < arr1.length) {
      newArr2.push(numbers.pop());
      newArr1.push(numbers.pop());
       }
       while(numbers.length > 0) {
      for (var i = 0; i < numbers.length; i++) {
        newArr2.push(numbers.pop());
      }
    }
  }
  var length1 = arr1.length;
  var length2 = arr2.length;
  var lengthToUse;
  length1 < length2 ? lengthToUse = length1 : lengthToUse = length2;
  for (var k = 0; k < 15; k++) {
  for (var j = 0; j < lengthToUse; j++) {
    for (var l = 0; l < lengthToUse; l++) {
    var total1 = 0;
  var total2 = 0;
  for (var i = 0; i < newArr1.length; i++) {
    total1+= newArr1[i];
  }
  for (var i = 0; i < newArr2.length; i++) {
    total2+= newArr2[i];
  }
  var difference1 = Math.abs(total1 - total2);
  var temp1 = newArr1[j];
  var temp2 = newArr2[l];
  newArr1[j] = temp2;
  newArr2[l] = temp1;
  total1 = 0;
  total2 = 0;
  for (var i = 0; i < newArr1.length; i++) {
    total1+= newArr1[i];
  }
  for (var i = 0; i < newArr2.length; i++) {
    total2+= newArr2[i];
  }
  var difference2 = Math.abs(total1 - total2);
  if (difference1 < difference2) {
  newArr1[j] = temp1;
  newArr2[l] = temp2;
  }
  newArr1.sort(function (a, b) {
    return a - b;
  })
  newArr2.sort(function (a, b) {
    return a - b;
  })
  }
  }
  }
  newArr1.sort(function (a, b) {
    return a - b;
  })
  newArr2.sort(function (a, b) {
    return a - b;
  })
  return [newArr1, newArr2];
  };
  const testRunnerMakeArraysEqualish = function () {
   var tests = [];
   for (var j = 0; j < 50; j++) {
   var number1 = getRandomInt(23);
   var number2 = getRandomInt(12);
   if (number2 === number1) {
     number2 = getRandomInt(54);
   }
   var arr1 = [];
   var arr2 = [];
   for (var i = 0; i < number1; i++) {
     arr1.push(getRandomInt(234));
   }
   for (var i = 0; i < number2; i++) {
    arr2.push(getRandomInt(234));
  }
  tests.push([arr1, arr2]);
}
var totalPassed = 0;
var failedTests = [];
for (var i = 0; i < tests.length; i++) {
  if (JSON.stringify(problem3.makeArraysEqualish(tests[i][0], tests[i][1])) === JSON.stringify(makeArraysEqualishTest(tests[i][0], tests[i][1]))) {
    totalPassed++
  } else {
    failedTests.push(`failed Make Arrays Equal(ish) test number ${i+1}: `);
    failedTests.push(`input: ${JSON.stringify(tests[i][0])}, ${JSON.stringify(tests[i][1])} `);
    failedTests.push(`correct answer: ${JSON.stringify(makeArraysEqualishTest(tests[i][0], tests[i][1]))} `);
    failedTests.push(`your answer: ${JSON.stringify(problem3.makeArraysEqualish(tests[i][0], tests[i][1]))} `);
    failedTests.push(`     `);
  }
}
for (var i = 0; i < failedTests.length; i++) {
  console.log(failedTests[i]);
}
console.log(`Make Arrays Equal(ish): passed ${totalPassed} / 50 tests!`)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  module.exports.testRunnerMakeArraysEqualish = testRunnerMakeArraysEqualish;
  module.exports.makeArraysEqualishTest = makeArraysEqualishTest;

  // =============================================================================================