// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// My Solution
const nextBigger = (n) => {
  const overlay = (a, b, p) => {
    for (let [i, n] of a.entries()) {
      b[p + i] = n;
    }
    return b;
  };

  const swap = (arr, i1, i2) => {
    const [a, b] = [arr[i1], arr[i2]];
    arr[i1] = b;
    arr[i2] = a;
  };

  let digits = n.toString().split("");

  for_each_digit: for (let i = digits.length - 1; i >= 0; --i) {
    let d = digits[i];
    let lower;

    for_each_trailing_digit: for (let j = digits.length - 1; j > i; --j) {
      if (d < digits[j]) {
        swap(digits, i, j);
        let trailing = digits.slice(i + 1, digits.length);
        trailing.sort();
        overlay(trailing, digits, i + 1);
        break for_each_digit;
      }
    }
  }

  let answer = +digits.join("");

  return n == answer ? -1 : answer;
};
