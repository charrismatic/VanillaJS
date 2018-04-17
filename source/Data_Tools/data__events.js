
function getNodeEventListeners(node){

  // disregard node selection for now
  // ES2105 VERSION
  var eventItems = Array.from(document.querySelectorAll('*')).map(element => {
    var listeners = getEventListeners(element);
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
  return eventItems;
}

function getNode(selector){
  return document.querySelector(selector);
}

var node = getNode('body');
var eventItems = getNodeEventListeners(node);

// 1. log them to the console
console.log(eventItems);

// 2. Put a red border around the elements
eventItems.forEach(function(item) {
  item.element.style.outline = '1px solid red';
})

// 3. generate a summary
var summary = eventItems.map(function(item) {
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

console.log("\n\n"+'Summary' + "\n\n");
