// Task
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

// Empty positions are marked ..
// Walls are marked W.
// Start and exit positions are empty in all test cases.

// My Solution
const pathFinder = (maze) => {
  const mazeArray = maze.split("\n").map((r) => r.split(""));

  const startX = 0;
  const startY = 0;

  const cellsToProcess = [[startX, startY]];
  while (cellsToProcess.length) {
    const [x, y] = cellsToProcess.shift();
    mazeArray[x][y] = "V";

    [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].forEach(([nextX, nextY]) => {
      if (mazeArray[nextX] || mazeArray[nextY] === ".") {
        if (nextX === mazeArray.length - 1 && nextY === mazeArray.length - 1) {
          return true;
        }
        cellsToProcess.push([nextX, nextY]);
      }
    });
  }

  return false;
};

// Best Practices Solution
function pathFinder(maze) {
  const rows = maze.split(`\n`).map((l) => l.split(``));
  const n = rows.length - 1;
  const moveTo = (x, y) => {
    if (x < 0 || y < 0 || x > n || y > n || rows[y][x] !== ".") {
      return false;
    }

    if (x === n && y === n) {
      return true;
    }

    rows[y][x] = `x`;

    return (
      moveTo(x - 1, y) ||
      moveTo(x + 1, y) ||
      moveTo(x, y - 1) ||
      moveTo(x, y + 1)
    );
  };

  return moveTo(0, 0);
}
