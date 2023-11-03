const { permutations } = require("./permutations");

describe("Permutations Tests", () => {
  it("Input 'a' the function should return ['a']", () => {
    expect(permutations("a")).toEqual(["a"]);
  });

  it("Input 'ab' the function should return ['ab', 'ba']", () => {
    expect(permutations("ab")).toEqual(["ab", "ba"]);
  });

  it("Input 'abc' the function should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']", () => {
    expect(permutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  it("Input 'aabb' the function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']", () => {
    expect(permutations("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "bbaa",
      "baba",
    ]);
  });
});
