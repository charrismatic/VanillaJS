// find events
// https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript?rq=1


// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_node_html_to_root (node) {

  var path = [];
  if ( typeof node === 'string' ) {
    var node = document.getElementById(node);
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

var node = $0;
rebuild_node_html_to_root(node);

// var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
// for ( node of headers ) { console.log(node) }