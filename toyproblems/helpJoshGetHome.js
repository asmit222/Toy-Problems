const test = require("../_tests/helpJoshGetHomeTest.js");

/* Help Josh Get Home:

- Josh is lost and needs your help. Given a 10x10 matrix with an 'x' representing Josh's current location and a 'z' representing Josh's home, implement the function which returns an array of directions ('up', 'down', 'left', 'right') that will successfully get Josh home in the least amount of moves possible.

- Most problems will have multiple right answers.

Example:

Input: [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'z', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]

Output: ['right', 'right', 'right', 'right', 'up', 'up', 'up', 'up', 'up', 'up']

- Also correct: ['right', 'up', 'right', 'up', 'right', 'up', 'right', 'up', 'up', 'up']

*/

const helpJoshGetHome = function(matrix) {

 // your code here!

  };


  module.exports.helpJoshGetHome = helpJoshGetHome;
  test.testRunnerHelpJoshGetHome();