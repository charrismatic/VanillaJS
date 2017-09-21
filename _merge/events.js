// event listeners

// node
// events = getNodeEventListeners (node)
// keys = keys(events);

// for ( key in keys ){
//   listeners = events[key]

//   for ( listener in listeners){
//     // events.show[0].listener.elem  - return node
//     target = listener.listeners.elem
//     type = listener.type


//   }
// // }

// var items = Array.prototype.slice.call(
//   document.querySelectorAll('*')
// ).map(function(element) {
//   var listeners = getEventListeners(element);
//   return {
//     element: element,
//     listeners: Object.keys(listeners).map(function(k) {
//       return { event: k, listeners: listeners[k] };
//     })
//   };
// }).filter(function(item) {
//   return item.listeners.length;
// });




// ES2105 VERSION
const eventItems = Array.from(document.querySelectorAll('*')).map(element => {
  const listeners = getEventListeners(element);

  return {
    element: element,
    listeners: Object.keys(listeners).map(key => {

      return {
        event: key,
        listeners: listeners[key]
      };

    })
  };

}).filter(eventItem => eventItem.listeners.length);


// 1. log them to the console
console.log(items);


// 2. Put a red border around the elements
items.forEach(function(item) {
  item.element.style.outline = '1px solid red';
})

// 3. generate a summary
var summary = items.map(function(item) {
	var el = item.element,
		id = el.id,
		className = el.className;
	if (className instanceof SVGAnimatedString) {
		className = className.baseVal;
	}
	var str = el.tagName.toLowerCase() + (id ? '#' + id : '') + (className ? '.' + className.replace(/\s+/g, '.') : '');
	str += ' ' + item.listeners.map(function(l) {
		return l.event + ': ' + l.listeners.length;
	}).join(' ');
	return str;
}).join('\n');
