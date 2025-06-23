/*

- use only last 4 digits.
- iterate in reverse, doubling every second digits.
- use an array.
- if doubled value > 10, value = value - 9.
- if checksum % 10 is not 0, it is invalid.


- will input always be string? how to handle if not
- what if string doesn't contain enough or no digits?

D:

- array for easy reassing of every other digits.

A:
- clean string, removing all non-digits.
- if string is empty || length is 1, return false;
- add cleaned string to array, transforming digitchars to numbers (slice, split, map)
- assign double and set to false
- iterate in reverse over numbers
  - if double == true
    - number = number * 2
    - if number >= 10
      - number = number - 9
    - reassign number at that index to new number;
    - set double to false
  - set double to true;
- create checksum by reducing all values in the array to one total.
- if checksum % 10 == 0
  - return true
return false

3554        6514
*/

function isValidLuhn(string) {
  let digits = string.replace(/\D/g, '');
  if (digits.length === 0 || digits.length === 1) {
    return false;
  }

  let numbersArray = digits.split('').map(Number);
  let double = false;

  for (let index = numbersArray.length - 1; index >= 0; index -= 1) {
    if (double === true) {
      let number = numbersArray[index] * 2;

      if (number >= 10) {
        number -= 9;
      }

      numbersArray[index] = number;

    }

    double = !double;
  }

  let checksum = numbersArray.reduce((sum, num) => sum + num);

  return checksum % 10 === 0;
}

// valid
console.log(isValidLuhn("2323 2005 7766 3554")) // true;
console.log(isValidLuhn("2323asdfkjhasdf2005 #\jhasdfl7766 3554")) // true;
console.log(isValidLuhn("xdfgkjhsdfgkj8763")) // true;
console.log(isValidLuhn("232")) // true

// invalid
console.log(isValidLuhn("1111")) // false;
console.log(isValidLuhn("   asdfkjhasd1111")) // false;
console.log(isValidLuhn("")) // false;
console.log(isValidLuhn("1")) // false;
