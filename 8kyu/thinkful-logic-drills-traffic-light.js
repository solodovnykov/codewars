// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// My Solution
const updateLight = (current) => {
  const colors = ["green", "yellow", "red"];
  const currentIndex = colors.indexOf(current);

  return currentIndex < colors.length - 1
    ? colors[currentIndex + 1]
    : colors[0];
};
