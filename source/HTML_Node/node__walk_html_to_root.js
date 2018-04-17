// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_html_path_to_node (selector) {

  var open_tags = [];
  var close_tags = []

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

  var el = document.getElementById(selector);

  do {
      open_tags.unshift(
        "<" +
        el.nodeName.toLowerCase() +
        (el.id ? ' id="' + el.id + '"' : '') +
        (el.className ? ' class="' + el.className + '"' : '') +
        ">"
      );
      close_tags.push(
        "</" + el.nodeName.toLowerCase() + ">"
      );
  } while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode));

  var new_html = build_html(open_tags, close_tags);
  console.log(new_html);
  return new_html;
}
rebuild_html_path_to_node("gc-wrapper");
