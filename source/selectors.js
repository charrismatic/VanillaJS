
/* QUERY SELECTOR TOOLS */

// SELECT UNIQUE OR FIRST ELEMENT
function get_node(selector){
  return document.querySelector(selector);
}


// SELECT ALL ELEMENTS
function get_all_nodes(selector){
  return document.querySelectorAll(selector);
}


// IF NODE EXISTS RETURN NODE
function is_node(selector){
  var node = get_node(selector);
  if (node){
    return node;
  } else {
    return false;
  }
}
