// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// sumIntervals( [
//   [1,2],
//   [6, 10],
//   [11, 15]
// ] ) => 9

// My Solution
const sumIntervals = (intervals) => {
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function (acc, el, index, array) {
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (el[0] < acc[acc.length - 1]) {
        if (el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < intervals.length - 1; i += 2) {
    result += intervals[i + 1] - intervals[i];
  }
  return result;
};

// Best Practices Solution
function sumIntervals(xs) {
  let ys = xs.sort(([a, b], [c, d]) => a - c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a, b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b - m);
    m = Math.max(m, b);
  }
  return res;
}
