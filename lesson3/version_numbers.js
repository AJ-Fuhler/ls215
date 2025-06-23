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

D:

- convert strings to two arrays.

A:

- return null if the inputs contain any characters other than digits and dots
- split the input numbers into parts as arrays of integer
- loop through the two version number's parts
  - for each step, access one part from each version number
  - if one version_number runs out of parts, use 0
  - compare the two parts
    - if part1 < part2
      - return -1
    - if part1 > part2
      - return 1
    - if part1 === part2
      - move to the next pair of parts
- if we reach the end of the loop, return 0
*/

function compareVersions(versionA, versionB) {
  let validChars = /^\d+(\.\d+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  let longest = Math.max(aParts.length, bParts.length);

  for (let idx = 0; idx < longest; idx += 1) {
    let aValue = aParts[idx] || 0;
    let bValue = bParts[idx] || 0;

    if (aValue > bValue)  {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}


console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1