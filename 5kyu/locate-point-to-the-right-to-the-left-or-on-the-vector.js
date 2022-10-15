// Task
// Your task is to determine the relationship between the given point and the vector. Direction of the vector is important! To determine if the point is to the left or to the right, you should imagine yourself standing at the beginning of the vector and looking at the end of the vector.

// Arguments
// You are given coordinates of a point and coordinates of a vector on 2D plane:

// point = [x, y]

// vector = [[x, y], [x, y]] (two points, direction is from first to second)

// Vectors always have non-zero length, so you don't have to check for that at this point.

// Return
// Your function must return:

// -1 if the point is to the left of the vector,

// 0 if the point is on the same line as vector,

// 1 if the point is to the right of the vector.

// My Solution
const pointVsVector = ([p1, p2], [[a1, b1], [a2, b2]]) => {
  return -1 * Math.sign((a2 - a1) * (p2 - b1) - (b2 - b1) * (p1 - a1));
};

// Best Practices Solution
function pointVsVector([px, py], [[x0, y0], [x1, y1]]) {
  return Math.sign((y1 - y0) * (px - x0) - (x1 - x0) * (py - y0));
}
