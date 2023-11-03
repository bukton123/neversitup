const countSmileys = (arr) => {
  return arr.reduce((count, face) => {
    if (/^[:;]{1}[-~]{0,1}[)D]{1}/.test(face)) {
      count += 1;
    }

    return count;
  }, 0);
};

exports.countSmileys = countSmileys;
