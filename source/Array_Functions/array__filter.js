
// FILTER ON VALUE
const array_filter_limit = (arr, limit ) => {
  arr.filter(function(n) {
    return n > limit;
  });
};

module.exports = array_filter_limit;
