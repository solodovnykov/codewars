// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// My Solution
const rgb = (r, g, b) => {
  const complete = (num) => {
    if (num < 0) return "00";
    if (num > 255) return (num - (num - 255)).toString(16).toUpperCase();
    if (num.toString(16).length < 2) {
      return 0 + num.toString(16).toUpperCase();
    } else {
      return num.toString(16).toUpperCase();
    }
  };

  return complete(r) + complete(g) + complete(b);
};

// Best Practices Solution
function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
