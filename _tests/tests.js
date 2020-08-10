const problems = require("../toyproblems/toyproblems.js");

// ====================== Tic-Tac-Toe ===========================
const ticTacToeTest = function (board) {
  var result = [];
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'x') {
      xCount++;
    }
    if (board[i][j] === 'o') {
      oCount++;
    }
  }
  }
  xCount === oCount ? result[1] = 'x' : result[1] = 'o';
  var column;
  var row;
  if (result[1] === 'x') {
    if (board[0][0] === 'x') {
      if (board[1][1] === 'x') {
       if (board[2][2] === ' ') {
         column = 3;
         row = 2;
       }
      }
     }
     if (board[0][2] === 'x') {
      if (board[1][1] === 'x') {
       if (board[2][0] === ' ') {
         column = 1;
         row = 2;
       }
      }
     }
     if (board[0][0] === 'x') {
      if (board[1][1] === ' ') {
       if (board[2][2] === 'x') {
         column = 2;
         row = 1;
       }
      }
     }
     if (board[0][2] === 'x') {
      if (board[1][1] === ' ') {
       if (board[2][0] === 'x') {
         column = 2;
         row = 1;
       }
      }
     }
     if (board[0][0] === ' ') {
      if (board[1][1] === 'x') {
       if (board[2][2] === 'x') {
         column = 1;
         row = 0;
       }
      }
     }
     if (board[0][2] === ' ') {
      if (board[1][1] === 'x') {
       if (board[2][0] === 'x') {
         column = 3;
         row = 0;
       }
      }
     }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
     if (board[i][j] === 'x') {
      if (board[i][j+1]) {
        if (board[i][j+1] === 'x') {
           if (j === 0) {
             if (board[i][j+2] === ' ') {
              column = j+3;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === ' ') {
      if (board[i][j+1]) {
        if (board[i][j+1] === 'x') {
           if (j === 0) {
             if (board[i][j+2] === 'x') {
              column = j+1;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === 'x') {
      if (board[i][j+1]) {
        if (board[i][j+1] === ' ') {
           if (j === 0) {
             if (board[i][j+2] === 'x') {
              column = j+2;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === 'x') {
       if(board[i+1]) {
      if (board[i+1][j]) {
        if (board[i+1][j] === 'x') {
           if (i === 0) {
             if (board[i+2][j] === ' ') {
              column = j+1;
              row = i+2;
             }
           }
        }
      }
    }
     }
     if (board[i][j] === ' ') {
       if (board[i+1]) {
      if (board[i+1][j]) {
        if (board[i+1][j] === 'x') {
           if (i === 0) {
             if (board[i+2][j] === 'x') {
              column = j+1;
              row = i;
             }
           }
        }
      }
     }
    }
    if (board[i][j] === 'x') {
      if (board[i+1]) {
     if (board[i+1][j]) {
       if (board[i+1][j] === ' ') {
          if (i === 0) {
            if (board[i+2][j] === 'x') {
             column = j+1;
             row = i+1;
            }
          }
       }
     }
    }
   }
    }
  }
  }
  if(!row) {
    return false;
  }
  if (row.toString() === '0') {
    row = 'a'
  }
  if (row.toString() === '1') {
    row = 'b'
  }
  if (row.toString() === '2') {
    row = 'c'
  }
  result[0] = `${column}${row}`
  return result[0];
}
const ticTacToeTestForGenerator = function (board) {
  var result = [];
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'x') {
      xCount++;
    }
    if (board[i][j] === 'o') {
      oCount++;
    }
  }
  }
  xCount === oCount ? result[1] = 'x' : result[1] = 'o';
  var column;
  var row;
  if (result[1] === 'x') {
    if (board[0][0] === 'x') {
      if (board[1][1] === 'x') {
       if (board[2][2] === ' ') {
         column = 3;
         row = 2;
       }
      }
     }
     if (board[0][2] === 'x') {
      if (board[1][1] === 'x') {
       if (board[2][0] === ' ') {
         column = 1;
         row = 2;
       }
      }
     }
     if (board[0][0] === 'x') {
      if (board[1][1] === ' ') {
       if (board[2][2] === 'x') {
         column = 2;
         row = 1;
       }
      }
     }
     if (board[0][2] === 'x') {
      if (board[1][1] === ' ') {
       if (board[2][0] === 'x') {
         column = 2;
         row = 1;
       }
      }
     }
     if (board[0][0] === ' ') {
      if (board[1][1] === 'x') {
       if (board[2][2] === 'x') {
         column = 1;
         row = 0;
       }
      }
     }
     if (board[0][2] === ' ') {
      if (board[1][1] === 'x') {
       if (board[2][0] === 'x') {
         column = 3;
         row = 0;
       }
      }
     }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
     if (board[i][j] === 'x') {
      if (board[i][j+1]) {
        if (board[i][j+1] === 'x') {
           if (j === 0) {
             if (board[i][j+2] === ' ') {
              column = j+3;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === ' ') {
      if (board[i][j+1]) {
        if (board[i][j+1] === 'x') {
           if (j === 0) {
             if (board[i][j+2] === 'x') {
              column = j+1;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === 'x') {
      if (board[i][j+1]) {
        if (board[i][j+1] === ' ') {
           if (j === 0) {
             if (board[i][j+2] === 'x') {
              column = j+2;
              row = i;
             }
           }
        }
      }
     }
     if (board[i][j] === 'x') {
       if(board[i+1]) {
      if (board[i+1][j]) {
        if (board[i+1][j] === 'x') {
           if (i === 0) {
             if (board[i+2][j] === ' ') {
              column = j+1;
              row = i+2;
             }
           }
        }
      }
    }
     }
     if (board[i][j] === ' ') {
       if (board[i+1]) {
      if (board[i+1][j]) {
        if (board[i+1][j] === 'x') {
           if (i === 0) {
             if (board[i+2][j] === 'x') {
              column = j+1;
              row = i;
             }
           }
        }
      }
     }
    }
    if (board[i][j] === 'x') {
      if (board[i+1]) {
     if (board[i+1][j]) {
       if (board[i+1][j] === ' ') {
          if (i === 0) {
            if (board[i+2][j] === 'x') {
             column = j+1;
             row = i+1;
            }
          }
       }
     }
    }
   }
    }
  }
  }
  if(!row) {
    return false;
  }
  if (row.toString() === '0') {
    row = 'a'
  }
  if (row.toString() === '1') {
    row = 'b'
  }
  if (row.toString() === '2') {
    row = 'c'
  }
  result[0] = `${column}${row}`
  if (!result[0]) {
    return false;
  } else {
    return true;
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const boardGenerator = function () {
  var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ]
board[getRandomInt(3)][getRandomInt(3)] = 'x';
board[getRandomInt(3)][getRandomInt(3)] = 'x';
board[getRandomInt(3)][getRandomInt(3)] = 'o';
board[getRandomInt(3)][getRandomInt(3)] = 'o';

if (!ticTacToeTestForGenerator(board)) {
  return boardGenerator();
}
return board;
}
const testRunnerTicTacToe = function () {
var totalPassed = 0;
var failedTests = [];
for (var i = 0; i < 50; i++) {
var testBoard = boardGenerator();
if (ticTacToeTest(testBoard) === problems.ticTacToeSolver(testBoard)) {
totalPassed++;
} else {
failedTests.push(`failed Tic-Tac-Toe test ${i}:`);
failedTests.push(`board: ${JSON.stringify(testBoard)}`);
failedTests.push(`correct answer: ${ticTacToeTest(testBoard)}`);
failedTests.push(`your answer: ${problems.ticTacToeSolver(testBoard)}`);
}
}
console.log(`Tic-Tac-Toe: ${totalPassed} / 50 tests passed`);
for (var i = 0; i < failedTests.length; i++) {
console.log(failedTests[i]);
}
}
module.exports.testRunnerTicTacToe = testRunnerTicTacToe;
module.exports.ticTacToeTest = ticTacToeTest;
module.exports.ticTacToeTestForGenerator = ticTacToeTestForGenerator;
module.exports.boardGenerator = boardGenerator;
// ================================================================================

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
if (findTheNextNumberTest(testArr[i]) === problems.findTheNextNumber(testArr[i])) {
  totalPassed++;
} else {
  failedTests.push(`failed Find The Next Number test number ${i}: `);
  failedTests.push(`input: ${testArr[i]} `);
  failedTests.push(`correct answer: ${findTheNextNumberTest(testArr[i])} `);
  failedTests.push(`your answer: ${problems.findTheNextNumber(testArr[i])} `);
}
}
console.log(`Find The Next Number: passed ${totalPassed} / 50 tests!`)
for (var i = 0; i < failedTests.length; i++) {
console.log(failedTests[i]);
}
  }
  module.exports.testRunnerFindTheNextNumber = testRunnerFindTheNextNumber;
  module.exports.findTheNextNumberTest = findTheNextNumberTest;
  // ===============================================================================


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
  for (var k = 0; k < 4; k++) {
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
  if (JSON.stringify(problems.makeArraysEqualish(tests[i][0], tests[i][1])) === JSON.stringify(makeArraysEqualishTest(tests[i][0], tests[i][1]))) {
    totalPassed++
  } else {
    failedTests.push(`failed Make Arrays Equal(ish) test number ${i}: `);
    failedTests.push(`input: ${JSON.stringify(tests[i][0])}, ${JSON.stringify(tests[i][1])} `);
    failedTests.push(`correct answer: ${JSON.stringify(makeArraysEqualishTest(tests[i][0], tests[i][1]))} `);
    failedTests.push(`your answer: ${JSON.stringify(problems.makeArraysEqualish(tests[i][0], tests[i][1]))} `);
  }
}
console.log(`Make Arrays Equal(ish): passed ${totalPassed} / 50 tests!`)
for (var i = 0; i < failedTests.length; i++) {
  console.log(failedTests[i]);
}
  }
  module.exports.testRunnerMakeArraysEqualish = testRunnerMakeArraysEqualish;
  module.exports.makeArraysEqualishTest = makeArraysEqualishTest;

  // =============================================================================================