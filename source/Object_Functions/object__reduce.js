
// REDUCE ARRAY TO UNIQUE SET
const object_reduce_on_key = (obj, key ) => {
  let unique = [];
  for (let item of obj) {
    unique = [...new Set([...unique, item[key]])];
  }
};

module.exports = object_reduce_on_key;
