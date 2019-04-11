

// USE PASS/FAIL TEST TO TEST BASE64
// function isBase64(str) {
//     try {
//         return btoa(atob(str)) == str;
//     } catch (err) {
//         return false;
//     }
// }



// validator.js
// https://github.com/chriso/validator.js/blob/master/src/lib/isBase64.js
// var notBase64 = /[^A-Z0-9+\/=]/i;
function isBase64(str) {
//   assertString(str); // remove this line and make sure you pass in a string
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === '=');
}
