// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

const solve = (s) => {
  let ul = 0,
    ll = 0,
    n = 0,
    sc = 0;

  ll = s.match(/[a-z]/g) ? s.match(/[a-z]/g).length : 0;
  ul = s.match(/[A-Z]/g) ? s.match(/[A-Z]/g).length : 0;
  n = s.match(/\d/g) ? s.match(/\d/g).length : 0;
  sc = s.match(/[^A-Za-z0-9]/g) ? s.match(/[^A-Za-z0-9]/g).length : 0;

  return [ul, ll, n, sc];
};
