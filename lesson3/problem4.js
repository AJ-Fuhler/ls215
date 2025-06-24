/* eslint-disable max-lines-per-function */
/*

P:

input: string containing numbers delimited by either ',', ':', or '-'
output: array containing all numbers included in every range.

rules

- '-', '..' and ':' mean the same thing: a range from the number on the left up until and including the number on the rigt.
- if the number on the right is less than the number on the left it means we go up a certain amount from the left digit.
- ',', means no range is expected, but still calculation needs to be made in number is smaller than previous num
-

D:
- loop through each number

A:

calculateNextNumber(digitString, resultArray)
- if resultArray's length == 0: return number version of digit string.
- if number version of digitString is not yet in resultArray AND it is greater
  than last digit in resultArray
  - return numberVersion of digit string.
- create numberVersion of digitString
-  add one to number
- while String(number) does not end with digitString OR number is lesser than lastDigit
  - number += 1
- return number


- init result to []
- split string in list of all digits.
- split string in list of all delimiters
- iterate over delimiters and their index
  - if delimiter is ','
    - number = calculateNextNumber(digits[i], result)
    - append number to result
  - if last element of delimters, append digits[i + 1]
  - else
    - number1 = calculateNextNumber(digits[i], result),
    - number2 = calculateNextNumber(digits[i + 1], result)
    - iterate over range from number1-number2 inclusive
      - append each num in range to result;
    - pop number2 from digits but add to the start to retain same indexing for later elements.

*/

function calculateNextNumber(digitString, resultArray) {
  if (resultArray.length === 0) return Number(digitString);

  let numberDigit = parseInt(digitString, 10);
  let lastArrayDigit = resultArray[resultArray.length - 1];

  if (!resultArray.includes(numberDigit) && numberDigit > lastArrayDigit) {
    return numberDigit;
  }

  let digitLength = digitString.length;
  do {
    numberDigit += 1;
  } while (String(numberDigit).slice(-digitLength) !== digitString ||
  numberDigit <= lastArrayDigit);

  return numberDigit;
}


function shortHandToFullNumbers(string) {
  let result = [];
  let digits = string.split(/\D+/);
  let delimiters = string.replace(/\d+| /g, '')
    .replace(/\.{2,}/g, '.')
    .split('');

  delimiters.forEach((delimiter, idx) => {
    let lastDelimiterIdx = delimiters.length - 1;
    if (delimiter === ',') {
      result.push(calculateNextNumber(digits[idx], result));
      if (lastDelimiterIdx === idx) {
        result.push(calculateNextNumber(digits[idx + 1], result));
      }
    } else {
      let number1 = calculateNextNumber(digits[idx], result);
      result.push(number1);
      let number2 = calculateNextNumber(digits[idx + 1], result);
      for (let num = number1 + 1; num < number2; num += 1) {
        result.push(num);
      }
      if (lastDelimiterIdx === idx) {
        result.push(number2);
      }
    }
  });

  return result;
}


console.log(shortHandToFullNumbers('1,3,7,2,4,1'));
console.log(shortHandToFullNumbers('1..3, 1-2'));
console.log(shortHandToFullNumbers('1:5:2'));
console.log(shortHandToFullNumbers('104-2'));
console.log(shortHandToFullNumbers('104-02'));
console.log(shortHandToFullNumbers('545, 64..11'));
console.log(shortHandToFullNumbers('1, 1, 1, 1, 1, 002'));

