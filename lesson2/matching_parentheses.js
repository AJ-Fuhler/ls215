const isBalanced = string => {
  let parentheses = [];

  for (let char of string) {
    if (char === '(') {
      parentheses.push('(');
    } else if (char === ')') {
      if (parentheses.length === 0) {
        return false;
      } else {
        parentheses.pop();
      }
    }
  }

  return parentheses.length === 0;
};


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false