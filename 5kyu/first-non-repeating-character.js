// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// My Solution
const firstNonRepeatingLetter = (s) => {
  let obj = {};
  for (let item of s) {
    if (obj[item.toLowerCase()]) {
      obj[item.toLowerCase()]++;
    } else {
      obj[item.toLowerCase()] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] === 1) {
      return s.charAt(s.toLowerCase().split("").indexOf(item));
    }
  }

  return "";
};

// Best Practices Solution
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}
