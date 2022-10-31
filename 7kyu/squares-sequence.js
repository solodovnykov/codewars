// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

const squares = (x, n) => {
  let result = [];
  let temp = x;

  if (n <= 0) return [];

  for (let i = 0; i < n; i++) {
    result.push(temp);
    temp = temp ** 2;
  }

  return result;
};
