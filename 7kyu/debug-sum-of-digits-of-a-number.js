// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
  const numberToString = integer.toString();
  let sum = 0;
  for (var i = 0; i < numberToString.length; i++) {
    sum = sum + +numberToString[i];
  }
  return sum;
}
