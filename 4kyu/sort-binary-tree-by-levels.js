// You are given a binary tree:

// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left  = left;
//     this.right = right;
//   }
// }
// Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

// Return empty array if root is null.

// Example 1 - following tree:

//        2
//   8        9
// 1  3     4   5

// My Solution
const treeByLevels = (tree) => {
  if (tree === null) return [];
  let result = [];
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();

    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
};
