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


// ES6 Defaults / Overrides Pattern
// --------------------------------
// Combine default parameters and destructuring for a compact version of the defaults / overrides pattern.
// https://gist.github.com/ericelliott/f3c2a53a1d4100539f71#es6-defaults--overrides-pattern
function merge_defaultsA ({
    bar = 'no',
    baz = 'works!'
  } = {}) {

  return (`${bar}, ${baz}`);
}

// console.log(merge_defaultsA({ bar: 'yay' }));



function merge_defaultsB (options) {
  var assign = Object.assign;

  var defaults2 = {
    bar: 'no',
    baz: 'works!'
  };
  var settings = assign({}, defaults2, options),
    bar = settings.bar,
    baz = settings.baz;

  return (bar + ', ' +baz);
}

// console.log(merge_defaultsB({  bar: 'yay'}));
