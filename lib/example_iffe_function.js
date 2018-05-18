(function() {
  // Wrap your code in an IIFE
  function PrimaOrder() {
    // this is your constructor
  }

  PrimaOrder.prototype.saveOptions = function() {
    // here is your saveOptions function on every PrimaOrder instance.
  };

  $(function() {
    // Use var to prevent making global variables
    var myPrimaOrder = new PrimaOrder();
    // Notice I use a different name. PrimaOrder is the variable that is
    // the "class" while myPrimaOrder is an "instance".
    myPrimaOrder.saveOptions();
  });
})(); // IIFE's require a trailing ()
// Search Google for Immediately Invoked Function Expression.