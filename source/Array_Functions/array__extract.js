
// JS
// function array_extract(arr, where) {
//   for (var key in arr) {
//     where[key] = arr[key];
//   }
//   conosole.log( where );
//   return where;
// }

// ES6 JS
const array_extract_where = (arr, where) => {
  console.log('EXTRACTING [' + where + '] from ARRAY', arr);
  for (let key in arr) {
    where[key] = arr[key];
  }
  console.log('RESULT', where);
  return where;
};

// IIFE// ES6
module.exports = array_extract_where;
