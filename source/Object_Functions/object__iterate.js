
/// ## OBJECT_ITERATE_FUNCTION
/// ITERATE OVER OBJECT PERFORMING AN OPERATION
var object_iterate_function = (obj, operation) => {
  if (typeof operation !== 'function') {
    operation = item => {console.log(item);};
  }
  [].forEach.call(obj, operation);
};

/// __EXAMPLE__
/// ```
/// var nodes = document.querySelectorAll('div')
/// var operation = item => {console.log(item)};
/// object_iterate_function(nodes,operation);
/// ```

module.exports = object_iterate_function;
