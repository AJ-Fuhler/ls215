/*

A:
- if argument is not a string, return '0000000000'
- remove all non-digit characters from the string.
- if digits length = 10
  - return digits
- if digits length < 10
  - return '0000000000'
- if digits length == 11
  - if first digits == 1
    - return digits from index 1 through to the end
  - else return '0000000000'
- return '0000000000'

*/

function cleanNumber(number) {
  const DEFAULT = '0000000000';

  if (!(typeof number === 'string')) {
    return DEFAULT;
  }

  let digits = number.replace(/\D/g, '');

  if (digits.length === 10)  {
    return digits;
  } else if (digits.length === 11) {
    return digits[0] === '1' ? digits.slice(1) : DEFAULT;
  }

  return DEFAULT;
}

console.log(cleanNumber('')) // '0000000000'
console.log(cleanNumber('-------')) // '0000000000'
console.log(cleanNumber('111')) // '0000000000'
console.log(cleanNumber('111111111a')) // '0000000000'

// 10 digits
console.log(cleanNumber('1111111111')) // '1111111111'
console.log(cleanNumber('            11-saxfs,mndf -- 11111111 ')) // '1111111111'

// 11 digits
console.log(cleanNumber('12222222222')) // '2222222222'
console.log(cleanNumber('22222222222')) // '0000000000'
console.log(cleanNumber('1       2    333333333')) // '2333333333'

// more than 11
console.log(cleanNumber('111111111111')) // '0000000000'