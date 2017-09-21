var test = function(){

  // ONE WAY
  var thing = [];
  thing.push("test");
  thing.push("new");

  // ANOTHER WAY
  this.that = [];
  that.push("same");
  that.push('other');

  return [thing, that];
}

console.log("A TEST FUNCTION");
console.log(test);
test();


var test2 = {

 // ONE WAY
 thing: function(){
    thing = [];
    thing.push("test");
    thing.push("new");
  },
  

  // ANOTHER WAY
  other: function() {
    that = [];
    that.push("same");
    that.push('other');
    return that;
  }
}

console.log("A SECOND TEST FUNCTION");
console.log(test2);
test2;



// SOME OTHER THING
var test3 = (function  ()  {
  
  thing = function(){
    thing = [];
    thing.push("test");
    thing.push("new");
  },
  

  // ANOTHER WAY
  other = function() {
    that = [];
    that.push("same");
    that.push('other');
   return that;
  }

})();
 