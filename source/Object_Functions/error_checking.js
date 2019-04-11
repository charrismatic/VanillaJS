// Native  Check to see if an object is a plain object (created using “{}” or “new Object”).
function isPlainObject (obj) {
  if (typeof (obj) !== 'object' || obj.nodeType || obj !== null && obj !== undefined && obj === obj.window) {
    return false;
  }
  if (obj.constructor &&
      !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
    return false;
  }
  return true;
}
// Check to see if an object is empty (contains no enumerable properties).

// Native
isFunction(item) {
  if (typeof item === 'function') {
    return true;
  }
  var type = Object.prototype.toString(item);
  return type === '[object Function]' || type === '[object GeneratorFunction]';
}

// Native
Array.isArray(array);
// Native
function isWindow(obj) {
 return obj !== null && obj !== undefined && obj === obj.window;
}
// Search for a specified value within an array and return its index (or -1 if not found).
// Native
array.indexOf(item) > -1;

// ES6-way
array.includes(item);

// Native
function isNumeric(value) {
 return !isNaN(parseFloat(n)) && isFinite(n);
}
is_property(prop) {
  if (this.snapshot[prop]) {
    return true;
  } else {
    return false;
  }
}
// INSPIRED FROM LODASH
// IS EMPTY OBJECT
isEmptyObject (item) {
  return ( Object.keys(item).length === 0 );
}
// IS EMPTY ARRAY
isEmptyArray (item) {
  if (Array.isArray(item)) {
    return ( item.length === 0);
  } else { return false; }
}
isEmptyString (item){
  return (item === '' );
}
isFalse (item) {
  return ( ! item );
}
doesNotExist (item) {
  return (typeof item === 'undefined');
}
