// https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string-in-javascript-without-using-try
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

var is_json_valid2 = ((text) => {
  if (/^[\],:{}\s]*$/.test(
    str.replace(/\\["\\\/bfnrtu]/g, '@')
       .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
       .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
   )){//the json is ok
      return true;
    } else {
      //the json is not ok
      console.warn(text, "is not valid JSON");
      return false 
    }    
})(str)

var is_json_valid = ((str) => {
  // var str = this;
  if (str === ""){ return false; }
  return (/^[\],:{}\s]*$/).test(str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
})(str)
