// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
const getCount = (str) => {
  let sum = 0;
  str.split('').map(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter) ? sum += 1 : sum);
  
  return sum;
}

// Best Practices Solution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}