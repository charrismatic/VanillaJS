/*eslint no-console: "off"*/

// querySelector
// querySelectorAll
// getElementById
// getElementsByTagName()
// getElementsByClassName()
   // hasAttribute()
   // hasAttributeNS()
   // hasAttributes()
   // hasPointerCapture()
   // computedStyleMap()


/* QUERY SELECTOR TOOLS */

// RETURNS A SINGLE NODE
function get(selector){
  return querySelector(selector);
}
function getAll(selector){
  return document.querySelectorAll(selector);
}

// SELECT UNIQUE OR FIRST ELEMENT
function get_node (selector){
  return document.querySelector(selector);
}
// SELECT ALL ELEMENTS
function get_nodes (selector){
  return document.querySelectorAll(selector);
}

function getAllFromNode(node,selector){
  return node.querySelectorAll(selector);
}


// IF NODE EXISTS RETURN NODE
function is_node (selector) {
  var node;
  if (node = document.querySelector(selector)) {
    return node;
  } else {
    return false;
  }
}

function exists (selector) {
  if (document.querySelector(selector)) {
    return document.querySelector(selector);
  } else {
    return false;
  }
}


function getAllNodes (selector, limit=1000){
  nodes = document.querySelectorAll(selector);
  if (nodes.length > limit) {
    console.warn("Restricting selection to the first 1000 nodes","Pass %arg2 as limit to raise this number or try being something more specific.");
    console.warn(selector, nodes.length);
    return nodes.slice(0,limit);
  }
  return nodes;
}
