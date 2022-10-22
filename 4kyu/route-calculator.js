// This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

// Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

// You will be passed a string of any length containing numbers and operators:

// '+' = add
// '-' = subtract
// '*' = multiply
// '$' = divide
// Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

// If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'

// Remember:
// The number of operations isn't limited
// Order of operations is imperative
// No eval or equivalent functions
// convert the number to floats, not to integers

// My Solution
const operations = {
  $: (a, b) => a / b,
  "*": (a, b) => a * b,
  "-": (a, b) => a - b,
  "+": (a, b) => a + b,
};

const operate = (parts, operator, fn) => {
  for (let i = 0; i < parts.length; i++) {
    const token = parts[i];
    if (token === operator) {
      const result = fn(parts[i - 1], parts[i + 1]);
      parts.splice(i - 1, 3, result);
      i = i - 1;
    }
  }
};

const calculate = (route) => {
  const parts = route.split("").reduce(
    ({ parts, currentNumber }, token, i, tokens) => {
      if (operations[token]) {
        parts = [...parts, +currentNumber, token];
        currentNumber = "";
      } else {
        currentNumber += token;
      }
      if (i === tokens.length - 1) {
        return [...parts, +currentNumber];
      }
      return { parts, currentNumber };
    },
    {
      parts: [],
      currentNumber: "",
    }
  );

  Object.keys(operations).forEach((operation) => {
    operate(parts, operation, operations[operation]);
  });

  return isNaN(parts[0]) ? "400: Bad request" : parts[0];
};
