var events = getNodeEventListeners (node)
var keys = keys(events);
for (var key in keys ){
  var listeners = events[key]
  for (var listener in listeners) {
    // events.show[0].listener.elem  - return node
    var target = listener.listeners.elem;
    var type = listener.type;
  }
}

// EXP GROUP
var items = Array.prototype.slice.call(document.querySelectorAll('*')).map(
  function(element) {
    var listeners = getEventListeners(element);
    return {
      element: element,
      listeners: Object.keys(listeners).map(function(k) {
        return { event: k, listeners: listeners[k] };
      })
    };
  }).filter(function(item) {
  return item.listeners.length;

});

// ES2105 VERSION
var event_items = Array.from(document.querySelectorAll('*'))
  .map(element => {
    var event_listeners = getEventListeners ( element );

  return {
    element: element,
    listeners: Object.keys(event_listeners).map(key => {

      return {
        event: key,
        listeners: event_listeners[key]
      };

    })
  };

}).filter(eventItem => eventItem.listeners.length);


// 1. log them to the console
console.log(event_items);

// 2. Put a red border around the elements
// event_items.forEach(function(item) {
//   item.element.style.outline = '1px solid red';
// })

// 3. generate a summary
var summary = event_items.map(function(item) {
  var el = item.element;
  var id = el.id;
  var className = el.className;
  if (className instanceof SVGAnimatedString) {
    className = className.baseVal;
  }
  var str = el.tagName.toLowerCase() +
    (id ? '#' + id : '') +
    (className ? '.' + className.replace(/\s+/g, '.') : '');

  str += ' ' + item.listeners.map(function(l) {
    return l.event + ': ' + l.listeners.length;
  }).join(' ');

  return str;
}).join('\n');

console.log(summary);
// console.log(
//   event_items[1].element.attributes.value,
//   event_items[1].element.tagName,
//   event_items[1].element.id,
//   event_items[1].element.className
// );
// console.log(
//   event_items[1].listeners[0].event,
//   event_items[1].listeners[0].listeners[0].listener.valueOf()
// );
// .submit_data.prototype.constructor.name
// .submit_data.prototype.constructor.prototype.constructor.prototype.constructor
