/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const anagramMap = new Map();

  words.forEach((ogWord) => {
    const wordLowerSorted = ogWord.toLowerCase().split("").sort().join("");
    const group = anagramMap.get(wordLowerSorted);

    anagramMap.set(wordLowerSorted, group ? [...group, ogWord] : [ogWord]);
  });

  const anagramObject = Object.fromEntries(anagramMap);
  const groupWords = Object.values(anagramObject);

  return groupWords;
}

module.exports = anagramGroups;

