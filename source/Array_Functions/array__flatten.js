// TODO: TEST THIS FUNCITON, THEN GENRALIZE OR REMOVE
// var flattenTco = ([first, ...rest], accumulator) =>
//   (first === undefined)
//     ? accumulator
//     : (Array.isArray(first))
//       ? flattenTco([...first, ...rest])
//       : flattenTco(rest, accumulator.concat(first));

// var flatten = (n) => flattenTco(n, []);

// EXAMPLE
// ```
// > console.log(array_flatten([[1,[2,[[3]]]],4,[5,[[[6]]]]]));
//   [1, 2, 3, 4, 5, 6]
// ```

// RETURNS FLATTENED ARRAY FROM NESTED
const array_flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? array_flatten(b) : b), []
);


// RECURSIVELY FLATTEN A MULTIDIMENSIONAL ARRAY
const flatten_array = (data) => {
  var flat = [];
  if ( data.length > 1) {
    data.forEach( function( node ){
      if ( node.length > 1) {
        flat = flat.concat( flatten_array(node));
      } else {
        flat = flat.concat( node );
      }
    });
  } else {
    flat = flat.concat( node );
  }
  return flat;
};
