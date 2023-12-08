/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  // Remove white spaces and convert to lowercase
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();
  
  // Check if both strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the strings
  return str1.split('').sort().join() === str2.split('').sort().join(); 

}

isAnagram('listen', 'silent');
const test = isAnagram('listen', 'silent');
module.exports = isAnagram;
