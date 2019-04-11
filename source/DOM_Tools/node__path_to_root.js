// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_node_path_to_root (node) {

  var count;
  var path = [];
  var nodes = [];

  var indent = function(count) {
    var indent_string = "";
    for (var i=0;i<count;i++){
      indent_string += "  ";
    }
    return indent_string;
  }


  var build_html = function(open_tags, close_tags){
    var output_html = "";
    var open_html = "";
    var close_html = "";

    for (var i=0;i<open_tags.length;i++){
      open_html += indent(i) + open_tags[i] + "\n";
      close_html += indent(open_tags.length-i-1) + close_tags[i] + "\n";
    }

    return open_html + close_html;
  }

  var open_tags = [];
  var close_tags = [];

  if ( typeof node === 'string' ) {
    var node = document.getnodeementById(node);
  } 
  var count = 0;
  do {

    nodes.unshift({
      order: count,
      id: node.id,
      class: node.className,
      tag: node.nodeName.toLowerCase()
    });

    path.unshift( "" +
      (node.tagName.toLowerCase()) +
      (node.id ? '#' + node.id : '') +
      (node.className ? '.' + node.className.split(' ').join('.') : '')
    );

    open_tags.unshift(
      "<" +
      node.nodeName.toLowerCase() +
      (node.id ? ' id="' + node.id + '"' : '') +
      (node.className ? ' class="' + node.className + '"' : '') +
      ">"
    );

    close_tags.push(
      "</" +
      node.nodeName.toLowerCase() +
      ">"
    );

    count++;

  } while ((node.nodeName.toLowerCase() != 'html') && (node = node.parentNode));

  var dom_path = function (nodelist) {
     return nodelist.join(' > ');
  }


  // console.log("nodes", nodes );
  console.log("path", path);
  console.log(dom_path(path));

  var new_html = build_html(open_tags, close_tags);

  console.log(new_html);
  return new_html;

}

var node = $0;
rebuild_node_html_to_root(node);
