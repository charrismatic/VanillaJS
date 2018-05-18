
// ARRAY MERGE
const array_merge = (arrA, arrB) => {
  if (arrB) {
    return [...new Set([...arrB, arrA ])];
  } else {
    return arrA;
  }
};

module.exports = array_merge;
