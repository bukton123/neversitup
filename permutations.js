const permutations = (input) => {
  let strToArr = [...input];

  if (input.length === 1) {
    return [input];
  }

  const check = {};
  const result = [];
  const len = strToArr.length - 1;
  for (let index in strToArr) {
    const char = strToArr[index];
    if (check[char]) {
      continue;
    }

    check[char] = true;
    let chars = [...strToArr.slice(0, +index), ...strToArr.slice(+index + 1)];
    for (var i = 0; i < len; i++) {
      const generate = [char, ...chars].join("");

      if (!check[generate]) {
        result.push(generate);
        check[generate] = true;
      }

      chars = [...chars.slice(-1), ...chars.slice(0, len - 1)];
    }
  }

  return result;
};

exports.permutations = permutations;
