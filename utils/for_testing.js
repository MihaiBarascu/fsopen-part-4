const reverse = (string) => {
  return string.split("").reverse().join("");
};

const average = (array) => {
  const reducerFunction = (sum, item) => {
    return sum + item;
  };

  return array.reduce(reducerFunction, 0) / (array.length || 1);
};

module.exports = {
  reverse,
  average,
};
