const areaOfPolygonInsideCircle = (r, n) =>
  parseFloat(((n / 2) * r ** 2 * Math.sin((2 * Math.PI) / n)).toFixed(3));

console.log(areaOfPolygonInsideCircle(2, 4));
