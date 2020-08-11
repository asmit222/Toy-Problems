const problem = require("../toyproblems/helpJoshGetHome.js")

const helpJoshGetHomeTest = function(matrix) {
  var xLocation;
  var zLocation;
  var directions = [];
  for (var i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'x') {
        xLocation = [i, j];
      }
      if (matrix[i][j] === 'z') {
        zLocation = [i, j];
      }
    }
  }
  if (xLocation[0] > zLocation[0]) {
    for (var i = 0; i < (xLocation[0] - zLocation[0]); i++) {
      directions.push('up');
    }
  }
  if (xLocation[0] < zLocation[0]) {
    for (var i = 0; i < (zLocation[0] - xLocation[0]); i++) {
      directions.push('down');
    }
  }
  if (xLocation[1] > zLocation[1]) {
    for (var i = 0; i < (xLocation[1] - zLocation[1]); i++) {
      directions.push('left');
    }
  }
  if (xLocation[1] < zLocation[1]) {
    for (var i = 0; i < (zLocation[1] - xLocation[1]); i++) {
      directions.push('right');
    }
  }
  directions.sort();
  return directions;
    };

    const testRunnerHelpJoshGetHome = function () {

     var matrices = [];

     for (var i = 0; i < 50; i++) {

     var matrix = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]

    var xLocation = [getRandomInt(10), getRandomInt(10)];
    var zLocation = [getRandomInt(10), getRandomInt(10)];
    while (JSON.stringify(xLocation) === JSON.stringify(zLocation)) {
      zLocation = [getRandomInt(10), getRandomInt(10)];
    }

    matrix[xLocation[0]][xLocation[1]] = 'x';
    matrix[zLocation[0]][zLocation[1]] = 'z';
    matrices.push(matrix);
     }

      var totalPassed = 0;
      var failedTests = [];

     for (var i = 0; i < matrices.length; i++) {
      var yourAnswer = problem.helpJoshGetHome(matrices[i]);
      if (yourAnswer) {
      yourAnswer.sort();
      }
      if (JSON.stringify(helpJoshGetHomeTest(matrices[i])) === JSON.stringify(yourAnswer)) {
        totalPassed++;
      } else {
        failedTests.push(`failed Help Josh Get Home test number ${i+1}: `);
        for (var j = 0; j < 10; j++) {
          if (j === 0) {
            failedTests.push(`input: ${JSON.stringify(matrices[i][j])} `);
          } else {
            failedTests.push(`       ${JSON.stringify(matrices[i][j])} `);
          }
        }
        failedTests.push(`correct answer: ${JSON.stringify(helpJoshGetHomeTest(matrices[i]))} `);
        failedTests.push(`your answer (sorted): ${JSON.stringify(yourAnswer)} `);
        failedTests.push(`     `);
      }
     }
     for (var i = 0; i < failedTests.length; i++) {
       console.log(failedTests[i]);
     }
     console.log(`Help Josh Get Home: passed ${totalPassed} / 50 tests!`);
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    module.exports.helpJoshGetHomeTest = helpJoshGetHomeTest;
    module.exports.testRunnerHelpJoshGetHome = testRunnerHelpJoshGetHome;