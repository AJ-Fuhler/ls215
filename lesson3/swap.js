/*

input: string
output: string with every alphabetic character swapped with the numeric charcters

rules
- leave non alphanumeric characters in place.
- if imbalance in alphabetic and numeric characters, leave extra in place.
-


questions
- can the string contain other characters? how to handle. ADD to the string as is.
- what to return if empty string? empty string
- will we alwas get a string? how to handle omitted arg or non-string. ALWAYS A STRING
- how to handle imbalances in numbers and alphabetic characters?


D:
- split string into array of chars for easy character movement.
- usedIndexes array that keeps track of indexes that have been swapped already.

A:
- split string into chars array
- init used_indexes array to [];
- iterate over chars
  - if char is alphanumeric
    - if idx is not yet in usedIndexes
      - if char is number: regex = /[a-z/gi
      - else regex = /\d/g
      - find next opposite character using regex.
        - if found, see if index of opposite is not in usedIndexes.
          - if not in usedIndexes, reassign chars[idx], chars[oppositeIdx] = chars[oppositeIdx], chars[idx]
          - append idx and oppositeIdx to usedIndexes
- return a string version of chars;
*/

function isAlphanumeric(char) {
  return /[a-z]|\d/i.test(char);
}

function isNumeric(char) {
  return /\d/.test(char);
}

function swap(str) {
  let chars = str.split('');
  let usedIndexes = [];

  chars.forEach((char, charIdx) => {
    if (isAlphanumeric(char)) {
      if (!usedIndexes.includes(charIdx)) {
        let regex = isNumeric(char) ? /[a-z]/i : /\d/;
        for (let oppositeIdx = charIdx + 1; oppositeIdx < chars.length; oppositeIdx += 1) {
          if (regex.test(chars[oppositeIdx]) && !usedIndexes.includes(oppositeIdx)) {
            [chars[charIdx], chars[oppositeIdx]] = [chars[oppositeIdx], chars[charIdx]];
            usedIndexes.push(charIdx, oppositeIdx);
            break;
          }
        }
      }

    }
  });

  return chars.join('');
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("") === ""); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1234") === "1234"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true