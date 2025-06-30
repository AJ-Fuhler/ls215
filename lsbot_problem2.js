/*

input: string to be justified, integer representing line width;
output: array containing strings with specified line width with the exception of the last string, which could be shorter.

rules
- each line needs to be exactly as long as the specified width
- if a single word is longer that specified with, it should have its own line without any justification
- if either argument is omitted, return empty array
- empty strings should result in an empty array
- if line width == 0 or negative, return empty array
- spaces should be distributed evenly between words. if there are spaces remaining, they should be added starting from the leftmost gap.
- last line should be left aligned and doesn't have to be justified.
- last line should have at least one word.
- single words on a line should be left-aligned, adding spaces to the right of it.

*/

console.log(justifyText("Launch School is a great place to learn", 16))
// Returns:
// [
//   "Launch School  is",
//   "a   great  place",
//   "to learn"
// ]
console.log(justifyText("Launch School is a great place to learn", 7))
/*
[
'Launch ',
'school ',
'is  a  ',
'great  ',
'place  ',
'to     ',
'learn',
]
*/

console.log(justifyText("", 7)) // []
console.log(justifyText("Launch School is a great place to learn")) // []
console.log(justifyText(7)) // []
console.log(justifyText("Launch School is a great place to learn", 0)) // []
console.log(justifyText("Launch School is a great place to learn", -1)) // []
console.log(justifyText("Launch", 6)) // ['launch']
console.log(justifyText("Launch", 5)) // ['launch']
console.log(justifyText("Launch", 5)) // ['launch']
console.log(justifyText("Launch          school", 5)) // ['launch', 'school']