const { findOdd } = require("./find-odd");

describe("Find the odd int Tests", () => {
  it("[7] should return 7, because it occurs 1 time", () => {
    expect(findOdd([7])).toBe(7);
  });

  it("[0] should return 0, because it occurs 1 time", () => {
    expect(findOdd([0])).toBe(0);
  });

  it("[1,1,2] should return 2, because it occurs 1 time", () => {
    expect(findOdd([1, 1, 2])).toBe(2);
  });

  it("[0,1,0,1,0] should return 0, because it occurs 3 times", () => {
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0);
  });

  it("[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it occurs 1 times", () => {
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
