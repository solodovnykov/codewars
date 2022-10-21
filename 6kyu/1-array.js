// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

// My Solution
const upArray = (arr) => {
  let result = [];
  let cursor = arr.length - 1;
  let flag = true;

  if (!arr.length) return null;

  while (cursor >= 0) {
    if (arr[cursor] >= 10 || arr[cursor] < 0) return null;
    if (arr[cursor] === 9 && flag) {
      result.unshift(0);
      arr.pop();

      if (arr.length === 0) {
        result.unshift(1);
      }
    } else {
      if (flag) {
        result.unshift(arr[cursor] + 1);
        flag = false;
      } else {
        result.unshift(arr[cursor]);
        flag = false;
      }
    }
    cursor--;
  }

  return result;
};
