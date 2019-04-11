// SET THE INSPECTION TARGET
var target = document;
var highlight_events = false;
var log_event_object = false;

// var events = getEventListeners(target);
// var keys = Object.keys(events);
// for (var key in keys ){
//   var listeners = events[key]
//   for (var listener in listeners) {
//     // events.show[0].listener.elem  - return node
//     var target = listener.listeners.elem;
//     var type = listener.type;
//   }
// }


// var items = Array.prototype.slice.call(document.querySelectorAll('*')).map(function(element) {
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


var get_html_element_events = () => {

  var event_items = Array.from(document.querySelectorAll('*')).map(element => {

    var listeners = getEventListeners(element);
    var id = get_element_identifier_string(element);
    var result = {};
    result[id]=listeners;
//     result[id] = Object.keys(listeners).map(key => {
//       return {
//         event: key,
//         options: listeners[key]
//       }
//     });

    return result;
//     return {
//       element: id,
//       listeners: Object.keys(listeners).map(key => {
//         return {
//           event: key,
//           options: listeners[key]
//         };
//     })

//     };
  }).filter(eventItem => Object.keys(eventItem).length);
//   });


//   var unique_events = new Set(event_items);
//    var unique_events = [];
//   Array.from(event_items).map(item => {
//       var result = {};
//       result[item]=listeners;
//       return result;
//   });

  return event_items;
//   unique_events.forEach(function(item){
//     console.log(item, 'color:red;', 'color:grey');
//   });

}


var event_items = get_html_element_events();
console.log(event_items);




var get_document_events = () => {

  return Array.from([document]).map(element => {
    var listeners = getEventListeners(element);
    return Object.keys(listeners).map(key => {
        return {
          event: key,
          listeners: listeners[key]
        };
      })
  }).filter(eventItem => eventItem.length).shift();

}




var get_element_identifier_string = (el) => {

  var id = el.id;
  var className = el.className;

  if (className instanceof SVGAnimatedString) {
    className = className.baseVal;
  }

  var str = el.tagName.toLowerCase() +
    (id ? '#' + id : '') +
    (className ? '.' + className.replace(/\s+/g, '.') : '');

  return str;
};

// Put a red border around the elements
if (highlight_events) {
  event_items.forEach(function(item) {
    item.element.style.outline = '1px solid red';
  })
}

// Generate a summary

// console.log('HTML ELEMENT LISTENERS ' + Object.keys(event_items).length);
// var summary = event_items.map(function(item) {
//   var element = item;
//   var str = '%c' + element + ' %c ' + item.listeners.map(function(l) {
//     return l.event + ': ' + l.listeners;

//   }).join(' ');
//   return str;
// // }).join('\n');
// });


// console.log(summary);
console.log(event_items);

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


// Log event items to the console
if (log_event_object) {
  console.log(event_items);
}
