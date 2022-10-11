// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3

//  With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
//  Your function should return `23`.

// My Solution
const longestSlideDown = (pyramid) => {
  let pyramidSum = [];
  pyramid.map((elem, index) => {
    pyramidSum.push(
      elem.map((e) => {
        return index === pyramid.length - 1 ? e : 0;
      })
    );
  });

  for (let i = pyramidSum.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramidSum[i].length; j++) {
      pyramidSum[i][j] =
        pyramid[i][j] +
        Math.max(pyramidSum[i + 1][j], pyramidSum[i + 1][j + 1]);
    }
  }
  return pyramidSum[0][0];
};

// Best Practices Solution
function longestSlideDown(pyramid) {
  return pyramid.reduceRight((last, current) =>
    current.map((v, i) => v + Math.max(last[i], last[i + 1]))
  )[0];
}
