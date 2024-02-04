/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  // create a letter frequency map here
  const anagramObject = (word) => {
    const letterMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");

    wordLowerArray.forEach((letter) => {
      const count = letterMap.get(letter);
      letterMap.set(letter, count ? count + 1 : 1);
    });

    // Convert the letter frequency map to an object
    return Object.fromEntries(letterMap);
  };

  // Create the letter occurrence object
  const letterOccurrenceObject = anagramObject(word);

  // Array to store letters with odd occurrences
  const odd = [];

  // Iterate through the letter occurrence object
  for (let letter in letterOccurrenceObject) {
    const count = letterOccurrenceObject[letter];

    // Check if  count is odd and add to the array
    if (count % 2) {
      odd.push({ letter, count });
    }
  }
  // Check if there is more than one letter with an odd occurrence
  return odd.length > 1 ? false : true;
}

module.exports = permutationPalindrome;
