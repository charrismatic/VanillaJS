
/**
 *  append_html
 *  @param target Query selector string we want to append to
 *  @param  Html Tag name that will contain html content
 *  @param html_content Html content to be inserted
 *  @param options Accepts object for optional id and classname of the parent
 *    container.
 *
 *  // Default options
 *    options = {
 *      id: '',
 *      class: '' ,
 *      tag; 'div'
 *    }
 *
 *  @example append_html('div', "<p>Hello Content</p>", {id:'', class:'', tag:'div'})
 */
function append_html(target, html_content, options) {

  if ( ! target || target === "") {
    target = 'body';
  }

  var tagName = 'div';
  var className = '';
  var id = '';
  if (options && options !== ""){

    if (options.tag) {
      tagName = options.tag;
    }

    if (options.class){
      className = options.class;
    }

    if (options.id){
      id = options.id;
    }
  }

  var node = document.createElement(tagName);
  node.className += className;
  node.id = id;
  node.innerHTML = html_content;

  document.querySelector(target).appendChild(node);
  return true;
}


function create_node( node_attr ){
  
  if (!node_attr.tag_name) {
    var tagName = 'div';
  } else {
    var tagName = node_attr.tag_name;
  }

  var node = document.createElement(tagName);
  
  if (node_attr.class_name) {
    node.className = node_attr.class_name;
  }
  
  if (node_attr.id) {
    node.id = node_attr.id;
  }
  
  if (node_attr.html_content) {
    node.innerHTML = node_attr.html_content;
  }
  
  return node;
}



/* QUERY SELECTOR TOOLS */

// SELECT UNIQUE OR FIRST ELEMENT
function get_node(selector){
  return document.querySelector(selector);
}


// SELECT ALL ELEMENTS
function get_all_nodes(selector){
  return document.querySelectorAll(selector);
}


// CHECK IF NODE EXISTS
function is_node(selector){
  var node = get_node(selector);
  if (node){
    return node;
  } else {
    return false;
  }
}


// CHECK IF NODE HAS CLASS
function has_class(node, class_name) {
  // NOTE: DOES NOT MAKE SENSE TO USE SELECTOR HERE
  return node.classList.contains(class_name);
}


// ADD A CLASS TO A NODE
function add_class(node, class_name) {
  if (node.classList.contains(class_name)) {
    return false;
  } else {
    node.classList.add(class_name);
  }
}


// REMOVE A CLASS FROM A NODE
function remove_class(node, class_name) {
  if (!node.classList.contains(class_name)) {
    return false;
  } else {
    node.classList.remove(class_name);
  }
}
