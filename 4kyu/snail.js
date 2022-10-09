// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// My Solution
const snail = (array) => {
  const sorted = [];
  while (array.length > 0) {
    sorted.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop());
    }
    sorted.push(...(array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift());
    }
  }
  return sorted;
};

// Best Practices Solution
function snail(array) {
  let result;
  while (array.length) {
    result = result ? result.concat(array.shift()) : array.shift();
    for (let i = 0; i < array.length; i++) result.push(array[i].pop());
    result = result.concat((array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
}
