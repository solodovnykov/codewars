// Your task is to create the function lazyChain which accepts any value, and allows method chaining through the use of invoke, and execution with the value method.

// Keep in mind that invoke is general enough to accept any prototype methods from the standard language.

// My Solution
const lazyChain = (arg) => {
  let invocations = [];

  let chain = {
    invoke,
    value,
  };

  return chain;

  function value() {
    return invocations.reduce((finalValue, invocation) => {
      return finalValue[invocation.name](...invocation.args);
    }, arg);
  }

  function invoke(name, ...args) {
    invocations.push({ name, args });
    return chain;
  }
};
