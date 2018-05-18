

// REDUCE ARRAY TO UNIQUE SET
const array_reduce = (arr) => {
  let unique = [...new Set([...unique, arr])];
  return unique;
};

module.exports = array_reduce;
