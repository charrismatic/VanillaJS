var flattenTco = ([first, ...rest], accumulator) => 
  (first === undefined)
    ? accumulator
    : (Array.isArray(first))
      ? flattenTco([...first, ...rest])
      : flattenTco(rest, accumulator.concat(first));
  
// var flatten = (n) => flattenTco(n, []);
  
// // ES6
var flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);


console.log(flatten([[1,[2,[[3]]]],4,[5,[[[6]]]]]))