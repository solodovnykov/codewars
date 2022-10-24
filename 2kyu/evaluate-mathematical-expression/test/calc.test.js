const { expect } = require("chai");
const calc = require("../calc.js");

describe("Evaluation of a math expression", () => {
  it("Basic tests", () => {
    expect(calc("1+1")).to.equal(2);
    expect(calc("1 - 1")).to.equal(0);
    expect(calc("1* 1")).to.equal(1);
    expect(calc("1 /1")).to.equal(1);
    expect(calc("-123")).to.equal(-123);
    expect(calc("123")).to.equal(123);
    expect(calc("2 /2+3 * 4.75- -6")).to.equal(21.25);
    expect(calc("12* 123")).to.equal(1476);
    expect(calc("2 / (2 + 3) * 4.33 - -6")).to.equal(7.732);
  });

  it("Advanced tests", () => {
    expect(calc("12*-1")).to.equal(-12);
    expect(calc("12* 123/-(-5 + 2)")).to.equal(492);
    expect(calc("((80 - (19)))")).to.equal(61);
    expect(calc("(1 - 2) + -(-(-(-4)))")).to.equal(3);
    expect(calc("1 - -(-(-(-4)))")).to.equal(-3);
    expect(calc("12* 123/(-5 + 2)")).to.equal(-492);
    expect(
      calc(
        "(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)"
      )
    ).to.equal(1);
    expect(calc("((2.33 / (2.9+3.5)*4) - -6)")).to.equal(7.45625);
    expect(
      calc("123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11")
    ).to.equal(-12042.760875);
  });
});