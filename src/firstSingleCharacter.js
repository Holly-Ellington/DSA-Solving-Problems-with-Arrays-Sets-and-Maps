function firstSingleCharacter(word) {
  // Check if the word is empty
  if (!word.length) return null;

  // Function to create a letter frequency map
  const createLetterMap = (word) => {
    const letterMap = new Map();
    const wordLowerArray = word.toLowerCase().split("");

    wordLowerArray.forEach((letter) => {
      // Get the current count of the letter or set to 1 if not present
      const count = letterMap.get(letter);
      letterMap.set(letter, count ? count + 1 : 1);
    });
    return letterMap;
  };

  //  the letter frequency map
  const letterMap = createLetterMap(word);
  const lettersArray = word.toLowerCase().split("");

  // Iterate through the letters to find, first single character
  for (let letter of lettersArray) {
    if (letterMap.has(letter)) {
      if (letterMap.get(letter) === 1) {
        // Return the first single character found
        return letter;
      }
    }
  }
  
  // If no single character is found, return null
  return null;
}

module.exports = firstSingleCharacter;

