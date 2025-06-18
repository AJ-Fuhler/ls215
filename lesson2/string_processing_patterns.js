let text = 'The quick brown fox jumps over the lazy dog.'

function capitalize(text) {
  let textArray = text.split(' ');

  let newTextArray = textArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return newTextArray.join(' ');
}

console.log(capitalize(text));

function countWordInText(word, text) {
  let textArray = text.replace(/[^a-z ]/ig, '').split(' ');

  return textArray.filter(wordInText => {
    return word.toLowerCase() === wordInText.toLowerCase();
  }).length;
}

console.log(countWordInText('the', text));    // 2
console.log(countWordInText('dog', text));    // 1