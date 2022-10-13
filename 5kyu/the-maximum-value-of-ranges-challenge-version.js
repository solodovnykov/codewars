// Description
// Given a list of integers A, for each pair of integers (first, last) in list ranges, calculate the sum of the values in A between indices first and last (both inclusive), and return the greatest resulting sum.

// Example
// A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
// ranges = [(1, 3), (0, 4), (6, 8)]

// result = 6

// My Solution
const maxSum = (arr, range) => {
  const sumFrom0ToN = [];

  for (let i = 0; i < arr.length; i++) {
    sumFrom0ToN[i] = (sumFrom0ToN[i - 1] || 0) + arr[i];
  }

  let currentMaxResult = -Infinity;

  for (let i = 0; i < range.length; i++) {
    const [start, end] = range[i];
    const sum = sumFrom0ToN[end] - (sumFrom0ToN[start - 1] || 0);
    if (sum > currentMaxResult) {
      currentMaxResult = sum;
    }
  }

  return currentMaxResult;
};
