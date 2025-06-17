const areAnagrams = (word1, word2) => {
  word1 = word1.split('').sort().join('');
  word2 = word2.split('').sort().join('');

  return word1 === word2;
}

const anagram = (word, list) => {
  return list.filter(currentWord => areAnagrams(word, currentWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]