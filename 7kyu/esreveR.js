// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

const reverse = (array) =>
  array.map((item, index, array) => array[array.length - index - 1]);
