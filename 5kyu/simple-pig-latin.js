// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
const pigIt = (str) =>
  str
    .split(" ")
    .map((word) =>
      !word.match(/\W/gi) ? word.substring(1) + word[0] + "ay" : word
    )
    .join(" ");

// Best Practices Solution
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}
