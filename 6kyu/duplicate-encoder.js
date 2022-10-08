// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My Solution
const duplicateEncode = (word) => {
  let chars = [...word.toLowerCase()];
  let duplicateList = chars.filter(
    (char, index, chars) => chars.indexOf(char) !== index
  );
  let duplicateSet = new Set(duplicateList);
  let uniqueDuplicateList = [...duplicateSet];
  let resultString = "";
  for (let i = 0, n = chars.length; i < n; ++i) {
    if (uniqueDuplicateList.includes(chars[i])) {
      resultString += ")";
    } else {
      resultString += "(";
    }
  }
  return resultString;
};

// Best Practices Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
