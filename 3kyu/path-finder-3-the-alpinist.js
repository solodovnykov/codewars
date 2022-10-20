// Task
// You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

// Location altitude is defined as an integer number (0-9).

// My Solution
const pathFinder = (maze) => {
  const mazeArray = maze.split("\n").map((r) => r.split("").map((x) => +x));
  const prices = Array.from({ length: mazeArray.length }).map(() => []);

  prices[0][0] = 0;

  const cellsToProcess = [[0, 0]];

  const currentIndex = 0;
  const answerFound = false;
  while (cellsToProcess.length) {
    const r = cellsToProcess
      .sort(([x1, y1], [x2, y2]) => prices[x1][y1] - prices[x2][y2])
      .shift();
    const [x, y] = r;

    [
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
      [x, y - 1],
    ].forEach(([nextX, nextY]) => {
      const newHeight = (mazeArray[nextX] || [])[nextY];
      if (newHeight === undefined) {
        return;
      }
      const oldHeight = mazeArray[x][y];
      const movementPrice = Math.abs(newHeight - oldHeight);

      const currentPrice = prices[nextX][nextY];

      if (
        currentPrice === undefined ||
        currentPrice > prices[x][y] + movementPrice
      ) {
        prices[nextX][nextY] = prices[x][y] + movementPrice;
        if (
          !cellsToProcess.find(
            ([curX, curY]) => curX === nextX && curY === nextY
          )
        ) {
          cellsToProcess.push([nextX, nextY]);
        }
      }
    });
  }

  return prices[mazeArray.length - 1][mazeArray.length - 1];
};

// Best Practices Solution
function pathFinder(area) {
  let a = area.split("\n"),
    max = a.length - 1,
    cost = a.map((e) => [...e].fill(1e5)),
    best = 1e5,
    go = (lastAlt, oldSum, y, x) => {
      let alt = a[y][x];
      let sum = oldSum + Math.abs(alt - lastAlt);
      if (sum >= best || sum >= cost[y][x]) return;
      if (y == max && x == max) return (best = sum);
      cost[y][x] = sum;
      if (x < max) go(alt, sum, y, x + 1);
      if (y < max) go(alt, sum, y + 1, x);
      if (y > 0) go(alt, sum, y - 1, x);
      if (x > 0) go(alt, sum, y, x - 1);
    };
  go(a[0][0], 0, 0, 0);
  return best;
}
