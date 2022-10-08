// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// My Solution
const expression = (number, callback) => !callback ? number : callback(number);

const zero = (callback) => expression(0, callback);
const one = (callback) => expression(1, callback);
const two = (callback) => expression(2, callback);
const three = (callback) => expression(3, callback);
const four = (callback) => expression(4, callback);
const five = (callback) => expression(5, callback);
const six = (callback) => expression(6, callback);
const seven = (callback) => expression(7, callback);
const eight = (callback) => expression(8, callback);
const nine = (callback) => expression(9, callback);

const plus = (callback) => (x) => x + callback;
const minus = (callback) => (x) => x - callback;
const times = (callback) => (x) => Math.floor(x * callback);
const dividedBy = (callback) => (x) => Math.floor(x / callback);


