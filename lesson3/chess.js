/*
A:

--- HIGH LEVEL ---
1. Parse the input string to an array of rows.
2. Get the locations of the queens.
3. If not both queens are present, return undefined.
4. Check whether queens are in attackable position.

HELPER: getQueenCoordinates
- create empty object `coordinates`.
- iterate over each string in the array (rowIndex)
  - for each char in string, if the char is 'W':
    - create key  'W' and assign to an array containg row index and column index (indexOf)
  - for each char in string, if the char is 'B':
    - create key  'B' and assign to an array containg row index and column index (indexOf)

return `coordinates`

HELPER: inAttackablePosition
- check if elements at index 0 are the same.
- check if elements at index 1 are the same.
- check if difference between elements at 0 are the same as difference between elements at 1.
- return false


--- DETAILED ---
1. Parse the input string to an array of rows.
- split the string at every occurence of a \n
2. Get the locations of the queens.
- Invoke getQueenCoordinates, passing in the board, and assign return value to `coordinates`.
3. If not both queens are present, return undefined.
- check if coordinates has two keys, 'W' and 'B'. If not, return undefined.
4. Check whether queens are in attackable position.
- return the return value of invoking inAttackablePosition, passing in both queen's coordinates as arguments


*/

function getQueenCoordinates(board) {
  let coordinates = {};
  board.forEach((row, rowIndex) => {
    row.split('').forEach((column, colIndex) => {
      if (column === 'W') {
        coordinates['W'] = [rowIndex, colIndex];
      }
    });
  });

  board.forEach((row, rowIndex) => {
    row.split('').forEach((column, colIndex) => {
      if (column === 'B') {
        coordinates['B'] = [rowIndex, colIndex];
      }
    });
  });

  return coordinates;
}

function inAttackablePosition(position1, position2) {
  if (position1[0] === position2[0]) {
    return true;
  }
  if (position1[1] === position2[1]) {
    return true;
  }
  if (Math.abs(position2[0] - position1[0]) === Math.abs(position2[1] - position1[1])) {
    return true;
  }

  return false;
}

function queenAttack(board) {
  board = board.split('\n');
  let coordinates = getQueenCoordinates(board);

  if (!(coordinates['W'] && coordinates['B'])) {
    return undefined;
  }

  return inAttackablePosition(coordinates['W'], coordinates['B']);
}

// Diagonal Attack 6,1 7,0
console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W____\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n") === true);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B______\n" +
                        "W_______\n") === true);
// Row Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B_____W\n" +
                        "________\n") === true);

console.log(queenAttack("BW______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === true);
// Column Attack
console.log(queenAttack("________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n") === true);

console.log(queenAttack("W_______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "B_______\n") === true);

// No Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "__B_____\n" +
                        "W_______\n") === false);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "____B___\n" +
                        "________\n") === false);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n" +
                        "W_______\n") === false);
// Edge Cases
console.log(queenAttack("________\n" +
                        "________\n" +
                        "_____W__\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === undefined);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B______\n" +
                        "________\n") === undefined);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === undefined);