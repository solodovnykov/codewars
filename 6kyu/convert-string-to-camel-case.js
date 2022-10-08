// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My Solution
const toCamelCase = (str) =>
  str.replace(/[-_]\w/gi, (match) => match.charAt(1).toUpperCase());

// Best Practices Solution
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
