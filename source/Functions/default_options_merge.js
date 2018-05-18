// OBJECT ASSIGN
// -------------
//  In Javascript ES6 you can use Object.assign
// https://stackoverflow.com/questions/9602449/a-javascript-design-pattern-for-options-with-default-values

function Module(options = {}){
  let defaults = {
    color : 'red',
  };
  let actual = Object.assign({}, defaults, options);
  options = Object.assign({}, defaults, options);

  console.info( actual.color );
}

// DEFAULT PARAMETERS
// ------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters
// Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.
// ```
// function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
//   statements
// }
// ```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5




// ES6 Defaults / Overrides Pattern
// --------------------------------
// Combine default parameters and destructuring for a compact version of the defaults / overrides pattern.
// https://gist.github.com/ericelliott/f3c2a53a1d4100539f71#es6-defaults--overrides-pattern
function foo ({
    bar = 'no',
    baz = 'works!'
  } = {}) {

  return (`${bar}, ${baz}`);
}

console.log(foo({
  bar: 'yay'
})); // logs 'yay, works!'


var assign = Object.assign;

var defaults2 = {
    bar: 'no',
    baz: 'works!'
  };

// ES5 Equivalent
// --------------


function foo2 (options) {
  var settings = assign({}, defaults2, options),
    bar = settings.bar,
    baz = settings.baz;

  return (bar + ', ' +baz);
}

console.log(foo2({
  bar: 'yay'
})); // logs 'yay, works!'
Gist written for How to Use ES6 for Isomorphic JavaScript Apps
