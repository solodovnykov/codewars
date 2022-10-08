// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My Solution
const humanReadable = (seconds) => {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map((time) => {
      time = Math.floor(time).toString();
      return time.length === 1 ? "0" + time : time;
    })
    .join(":");
};

// Best Practices Solution
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map((v) => {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}
