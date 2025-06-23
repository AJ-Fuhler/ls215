/*
P:

- Input: two version numbers in string representation.
- Output: one of the numbers from 1, 0, or -1; or null for invalid input.

Rules:

- if any inputs contain invalid characters, return null (regex)
  - any characters other than digits and . are considered invalid.
  - a version number that begins or ends with a period or has more than one period in a row is invalid.
- Compare the two input  versions
  - if version1 > version2: return 1
  - if version1 < version2: return -1
  - if version1 === version2: return 0

- in the split version of the versions, if the lenghts are different, compare using the below steps
  until you hit the max length of the smaller version number, then see if the longer version number has any
  other value than 0. if it does, the longer version number is greater. if only 0's, they are equal.

- compare each period delimited number
  - if the numbers are different, return the correct number based on rules above.
  - if the numbers are the same, compare the next numbers and repeat these steps.
*/

