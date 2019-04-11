//Node.compareDocumentPosition()
//DOCUMENT_POSITION_DISCONNECTED	         1
//DOCUMENT_POSITION_PRECEDING	             2
//DOCUMENT_POSITION_FOLLOWING	             4
//DOCUMENT_POSITION_CONTAINS	             8
//DOCUMENT_POSITION_CONTAINED_BY	         16
//DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC	 32
//// node.compareDocumentPosition( otherNode )


// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_node_html_to_root (node) {

  var path = [];
  if ( typeof node === 'string' ) {
    var node = document.getnodeementById(node);;
  }
  do {
      path.unshift(
        "<" + node.nodeName +
        (node.className ? ' class="' + node.className + '"' : '') +
        (node.id ? ' id="' + node.id + '"' : '')
      );
  } while ((node.nodeName.toLowerCase() != 'html') && (node = node.parentNode));
  var html_path=path.join(">\n");
  console.log(html_path);
  return html_path;
}

rebuild_node_html_to_root(node);
