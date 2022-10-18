const pathFinder = (maze) => {
  const mazeArray = maze.split("\n").map((r) => r.split(""));

  const startX = 0;
  const startY = 0;

  const cellsToProcess = [{ coords: [startX, startY], step: 0 }];

  while (cellsToProcess.length > 0) {
    const {
      coords: [x, y],
      step,
    } = cellsToProcess.pop();

    mazeArray[x][y] = step;

    const candidates = [
      [x - 1, y],
      [x, y - 1],
      [x + 1, y],
      [x, y + 1],
    ];
    for (let i = 0; i < candidates.length; ++i) {
      const [nextX, nextY] = candidates[i];
      const nextCell = (mazeArray[nextX] || [])[nextY];
      if (nextCell === "." || (nextCell !== "W" && nextCell > step + 1)) {
        cellsToProcess.push({ coords: [nextX, nextY], step: step + 1 });
      }
    }
  }

  const result = mazeArray[mazeArray.length - 1][mazeArray.length - 1];
  return result === "." ? false : result;
};
