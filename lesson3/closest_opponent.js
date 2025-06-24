/*

input: object containing opponents (string) as keys and their positions (numbers) as values, number as position
output: number representing position that is closed to second argument

rules:

- if two opponents are equidistant, return the opponent with the higher position (higher number)
-

questions:
- will we always be given 2 arguments? how to handle missing argument. always 2
- can the first argument be a different type? how to handle. always object
- can the second argument be a different type? always integer
- can positions be negative? how to handle.t
- can positions be NaN, Infinity or - Infinity? how to handle... always positive integers
- how to handle positions that are not an integer. n/a
- can to positions be the same number? how to handle. no
- what is meant by 'active' opponent? have numeric positions. exterminated opps have null


D:
- array containing just the values of the object
- variable containing closestOpp (number)

A:
- if positions is empty, return null
- extract values of positions into array, filtering out null values.
- init closest to array[0];
- init minDistance to absolute value of position minus array[0]
- iterate over array
  - currentDistance = abs(currPos - position)
  - if currDistance == minDistance
    - if currPos > closest
      - closest = currPos
  - else if currDistance < MinDistance
    - clostest = currPos
    - minDistance = currDistance
- return closest
*/

function findClosestOpponent(positions, position) {
  positions = Object.values(positions).filter(pos => pos);
  if (positions.length === 0) return null;

  let closest = positions[0];
  let minDistance = Math.abs(position - closest);

  for (let currPos of positions) {
    let currentDistance = Math.abs(currPos - position);
    if (currentDistance ===  minDistance && currPos > closest) {
      closest = currPos;
    } else if (currentDistance < minDistance) {
      closest = currPos;
      minDistance = currentDistance;
    }
  }

  return closest;
}

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

console.log(findClosestOpponent({}, 3)); // null

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : 5, "Opponent 1c" : null,
  "Opponent 1d" : null, "Opponent 1e" : 200, "Opponent 1f" : 400
}, 300)); // 400