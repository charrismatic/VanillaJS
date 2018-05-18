
/*
    cycle.js
    2017-02-07

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.

    JSON.decycle makes it possible to encode cyclical structures and dags in JSON
    JSON.retrocycle to recover them

    This is a capability that is not provided by ES5.
    JSONPath is used to represent the links. [http://GOESSNER.net/articles/JsonPath/]


*/


// Make a deep copy of an object or array,
// assuring that there is at most one instance of
// each object or array in the resulting structure.
// The duplicate references (which might be forming cycles)
// are replaced with an object of the form
//      {"$ref": PATH}
// where the PATH is a JSONPath string that locates the first occurance.
//
// If a replacer function is provided, then it will be called for each value.
// A replacer function receives a value and returns a replacement value.
// JSONPath is used to locate the unique object.
// $ indicates the top level of the object or array.
// [NUMBER] or [STRING] indicates a child element or property.
//
// __EXAMPLE__
// ```
//     var a = [];
//     a[0] = a;
//     return JSON.stringify(JSON.decycle(a));
//
// // RESULTS IN
// // '[{"$ref":"$"}]'.
// ```
if (typeof JSON.decycle !== 'function') {
  JSON.decycle = function decycle(object, replacer) {
    'use strict';
    var objects = new WeakMap();
    return (function derez(value, path) {
      var old_path;
      var nu;
      if (replacer !== undefined) {
        value = replacer(value);
      }
      if (
        typeof value === 'object' && value !== null &&
        !(value instanceof Boolean) &&
        !(value instanceof Date) &&
        !(value instanceof Number) &&
        !(value instanceof RegExp) &&
        !(value instanceof String)
      ) {
        old_path = objects.get(value);
        if (old_path !== undefined) {
          return {$ref: old_path};
        }

        objects.set(value, path);

        if (Array.isArray(value)) {
          nu = [];
          value.forEach(function (element, i) {
            nu[i] = derez(element, path + '[' + i + ']');
          });
        } else {

          nu = {};
          Object.keys(value).forEach(function (name) {
            nu[name] = derez(
              value[name],
              path + '[' + JSON.stringify(name) + ']'
            );
          });
        }
        return nu;
      }
      return value;
    }(object, '$'));
  };
}


// Restore an object that was reduced by decycle.
// Members whose values are objects of the form
//     {$ref: PATH}
// are replaced with references to the value found by the PATH.
// This will restore cycles.
// The object will be mutated.
// The eval function is used to locate the values described by a PATH.
// The root object is kept in a $ variable.
// A regular expression is used to assure that the PATH is extremely well formed.
// The regexp contains nested * quantifiers.
// That has been known to have extremely bad performance problems on some browsers for very long strings.
// A PATH is expected to be reasonably short.
// A PATH is allowed to belong to a very restricted subset of Goessner's JSONPath.
if (typeof JSON.retrocycle !== 'function') {
  JSON.retrocycle = function retrocycle($) {
    'use strict';
    var px = /^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\([\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;
    (function rez(value) {
      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          value.forEach(function (element, i) {
            if (typeof element === 'object' && element !== null) {
              var path = element.$ref;
              if (typeof path === 'string' && px.test(path)) {
                value[i] = eval(path);
              } else {
                rez(element);
              }
            }
          });
        } else {
          Object.keys(value).forEach(function (name) {
            var item = value[name];
            if (typeof item === 'object' && item !== null) {
              var path = item.$ref;
              if (typeof path === 'string' && px.test(path)) {
                value[name] = eval(path);
              } else {
                rez(item);
              }
            }
          });
        }
      }
    }($));
    return $;
  };
}
