/*

P:

Input: string
output: true or false depending on whether you can spell the string with the blocks.

- we have 13 blocks, each block representing 2 letters of alphabet.
- you can only use each block once per word: if you use the block, the other letter on the block can't be used.
- try to recreate the string with the blocks. if you can, return true, otherwise return false.
- compare the string case insensitive.

questions
- how to handle empty string? return true
- how to handle multiple arguments? not more arguments are given
- how to handle any other data type than string. only strings are provided.

D:
- 2 arrays, at each index have char's that belong to the same block.
- string to build up.

A:
- create our 2 arrays of length 13 with characters.
- initiate result to empty string.
- convert input string to lowercase.
- iterate over characters in input string
  - find char in array
  - if found:
    - add char to result
    - delete char at current index of array1
    - delete char at currednt index of array 2
  - else find char in array2
  - if found:
    - add char to result
    - delete char at current index of array1
    - delete char at current index of array2
  - else return false (char is no longer in either array)

return result === input string

*/

function isBlockWord(string) {
  let side1 = ['b', 'x', 'd', 'c', 'n', 'g', 'r', 'f', 'j', 'h', 'v', 'l', 'z'];
  let side2 = ['o', 'k', 'q', 'p', 'a', 't', 'e', 's', 'w', 'u', 'i', ' y', 'm'];
  string = string.toLowerCase();

  for (let char of string) {
    if (side1.includes(char)) {
      let index = side1.indexOf(char);
      side1.splice(index, 1);
      side2.splice(index, 1);
    } else if (side2.includes(char)) {
      let index = side2.indexOf(char);
      side1.splice(index, 1);
      side2.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // true