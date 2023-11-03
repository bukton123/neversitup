const findOdd = (input) => {
  const len = input.length - 1;
  return input.reduce(
    (prev, item, index) => {
      if (prev.check[item]) {
        prev.check[item] += 1;
      } else {
        prev.check[item] = 1;
      }

      if (index === len) {
        for (let [key, value] of Object.entries(prev.check)) {
          if (value % 2 !== 0) {
            prev.result = +key;
            break;
          }
        }
      }

      return prev;
    },
    {
      check: {},
      result: 0,
    }
  ).result;
};

exports.findOdd = findOdd;
