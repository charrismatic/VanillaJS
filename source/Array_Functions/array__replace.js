
// REPLACE EXPRESSION IN ARRAY
const array_replace_regex = (str, mapObj) => {
  let re = new RegExp(
    Object.keys(mapObj).join('|'),
    'gi'
  );
  return str.replace(re, function(matched){
    return mapObj[matched.toLowerCase()];
  });
};

module.exports = array_replace_regex;
