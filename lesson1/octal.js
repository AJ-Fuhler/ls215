function octalToDecimal(numberString) {
  let reversedDigits = numberString.split('').reverse();
  let nth = 0;
  let decimal = 0;

  reversedDigits.forEach(number => {
    decimal += number * (8 ** nth);
    nth += 1;
 });

  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

function betterOctalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, idx) => {
    return Number(digitChar) * (8 ** (numberString.length - idx - 1));
  });

  return decimalParts.reduce((sum, num) => sum + num);
}


console.log(betterOctalToDecimal('1'));           // 1
console.log(betterOctalToDecimal('10'));          // 8
console.log(betterOctalToDecimal('130'));         // 88
console.log(betterOctalToDecimal('17'));          // 15
console.log(betterOctalToDecimal('2047'));        // 1063
console.log(betterOctalToDecimal('011'));         // 9