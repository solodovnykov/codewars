// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My Solution
const solution = (string) =>
  string.replace(/(.)[A-Z]/g, (match) => match.split("").join(" "));

// Best Practices Solution
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
