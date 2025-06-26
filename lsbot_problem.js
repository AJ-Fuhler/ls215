/*

P:
what is considered balanced?
- brackets are balanced when each opening bracket has a corresponding closing bracket that comes after it.
- they must be properly nested (no crossing pairs)
- each opening bracket must be closed by the same type of bracket that opened it.
which types of brackets should i consider?
- () [] {}
will i always be given one argument? if not, how should  i handle omitted arguments or multiple arguments?
- just one arg
 will the argument always be a string? if not, how should i handle non-string arguments?
- arg will always be a string
will the string always contain brackets or can it be without brackets? what should i return in that case?
- may or may not contain brackets.
- if string contains no brackets, consider balanced (true)
- empty strings should be true


D:
- array that i will add and delete brackets with

A:
- init brackets to []
- iterate over chars in string
  - if char is closing bracket (isClosingBracket)
    - if brackets[-1] is not the opening version of this bracket
      - return false
    - pop last element out of brackets
  - if char is opening bracket(isOpeningBracket)
    - append it to brackets
- return brackets.length === 0;
*/

function isClosingBracket(char) {
  return /\)|\]|\}/.test(char);
}

function isOpeningBracket(char) {
  return /\(|\[|\{/.test(char);
}

function getOppositeBracket(char) {
  if (char === ')') return '(';
  if (char === ']') return '[';
  if (char === '}') return '{';
}

function isBalanced(string) {
  let brackets = [];

  for (let char of string) {
    if (isClosingBracket(char)) {
      let oppositeBracket = getOppositeBracket(char);

      if (brackets[brackets.length - 1] === oppositeBracket) {
        brackets.pop();
      } else {
        return false;
      }
    } else if (isOpeningBracket(char)) {
      brackets.push(char);
    }
  }

  return brackets.length === 0;
}

console.log(isBalanced('(hello[world])') === true);
console.log(isBalanced('') === true);
console.log(isBalanced('hello world') === true);
console.log(isBalanced('[{()}]') === true);
console.log(isBalanced('[{)]') === false);
console.log(isBalanced('[') === false);
console.log(isBalanced(')') === false);
console.log(isBalanced('((()))') === true);    // Multiple same type
console.log(isBalanced('([)]') === false);     // Crossing pairs
console.log(isBalanced('((()') === false);     // Multiple unclosed
console.log(isBalanced(')))') === false);      // Multiple unmatched closing
console.log(isBalanced('({[}])') === false);   // Complex crossing