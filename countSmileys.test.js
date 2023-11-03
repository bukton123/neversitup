const { countSmileys } = require("./countSmileys");

describe("Count the smiley faces! Tests", () => {
  it("[':)', ';(', ';}', ':-D'] should return 2", () => {
    expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
  });
  it("[';D', ':-(', ':-)', ';~)'] should return 3", () => {
    expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });
  it("[';]', ':[', ';*', ':$', ';-D'] should return 1", () => {
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });
});
