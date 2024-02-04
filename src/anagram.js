/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */



function anagram(s1, s2) {
  const s1Map = new Map();
  const s2Map = new Map();

    // Convert strings to lowercase and split into arrays of characters

  const s1LowerArray = s1.toLowerCase().split("");
  const s2LowerArray = s2.toLowerCase().split("");

    // Build frequency map for the first string

  s1LowerArray.forEach((letter) => {
    const count = s1Map.get(letter);
    s1Map.set(letter, count ? count + 1 : 1);
  });

    // Build frequency map for the second string

  s2LowerArray.forEach((letter) => {
    const count = s2Map.get(letter);
    s2Map.set(letter, count ? count + 1 : 1);
  });

  // Check equality
  for (const [key, value] of s1Map.entries()) {
    if (s2Map.get(key) !== value)
      // If frequencies are not equal, strings are not anagrams
      return false;
  }

  return true;
}

module.exports = anagram;

