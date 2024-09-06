const error = (...values) => {
  console.error(...values);
};

const info = (...values) => {
  console.log(...values);
};

const logs = { error, info };

module.exports = logs;
