

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
