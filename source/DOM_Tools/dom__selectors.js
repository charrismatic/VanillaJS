
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

function getAllNodes(selector){
  nodes = document.querySelectorAll(selector);
  if (nodes.length > 1000) {
    console.warn("Query string returned more than 1000 nodes. Try a something more specific, until the filtering feature is completed");
    console.warn(selector, nodes.length);
    return false;
  }
  return nodes;
}


// RETURNS A SINGLE NODE
// USE WITH ELEMENTS THAT HAVE ID
function getNode(selector){
  return document.querySelector(selector);
}



function getNode(selector){
  document.querySelector(selector);
}

function getAll(selector){
  document.querySelectorAll(selector);
}

function getAllFromNode(node,selector){
  node.querySelectorAll(selector);
}
