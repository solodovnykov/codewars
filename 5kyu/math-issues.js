// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function (number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  if (parseFloat("." + decimalPart) >= 0.5) {
    return parseFloat(integerPart) + 1;
  } else {
    return parseFloat(integerPart);
  }
};

Math.ceil = function (number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  if (parseFloat("." + decimalPart) > 0) {
    return parseFloat(integerPart) + 1;
  } else {
    return parseFloat(integerPart);
  }
};

Math.floor = function (number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0];

  return parseFloat(integerPart);
};
