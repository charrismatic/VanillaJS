// TODO: ADD ARRAY SIZE CHECKS
// TODO: LOOKUP ARRAY SORT, LOCALCOMPARE() PERFORMANCE LIMITATIONS
// NOTE: SORT FUNCTION SORTS ARRAY IN PLACE
// NOTE: WE RETURN THE RESULT ONLY TO SIGNAL FUNCTION COMPLETION

/// ## ARRAY_SORT_NATURAL
/// Sort array by natural sort
const array_sort_natural = (arr) => {
  return arr.sort(function(a, b) {
    return a.localeCompare(b);
  });
};

/// __EXAMPLE__
///
/// ```javascript
/// var test = ['ASDF','BGRA','123','678','1 2'];
/// array_sort_natural(test);
///
/// // RESULTS
/// // ["1 2", "123", "678", "ASDF", "BGRA"]
/// ```

module.exports = array_sort_natural;
